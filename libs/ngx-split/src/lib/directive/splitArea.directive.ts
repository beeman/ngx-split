import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
  NgZone,
} from '@angular/core';

import { SplitComponent } from '../component/split.component';
import { IAreaSize } from '../interface';
import { getInputPositiveNumber, getInputBoolean } from '../utils';

@Directive({
  selector: 'ui-split-area, [ui-split-area]',
  exportAs: 'uiSplitArea',
})
export class SplitAreaDirective implements OnInit, OnDestroy {
  private _order: number | null = null;

  @Input() set order(v: number | null) {
    this._order = getInputPositiveNumber(v, null);

    this.split.updateArea(this, true, false);
  }

  get order(): number | null {
    return this._order;
  }

  private _size: IAreaSize = null;

  @Input() set size(v: IAreaSize) {
    this._size = getInputPositiveNumber(v, null);

    this.split.updateArea(this, false, true);
  }

  get size(): IAreaSize {
    return this._size;
  }

  private _minSize: number | null = null;

  @Input() set minSize(v: number | null) {
    this._minSize = getInputPositiveNumber(v, null);

    this.split.updateArea(this, false, true);
  }

  get minSize(): number | null {
    return this._minSize;
  }

  private _maxSize: number | null = null;

  @Input() set maxSize(v: number | null) {
    this._maxSize = getInputPositiveNumber(v, null);

    this.split.updateArea(this, false, true);
  }

  get maxSize(): number | null {
    return this._maxSize;
  }

  private _lockSize = false;

  @Input() set lockSize(v: boolean) {
    this._lockSize = getInputBoolean(v);

    this.split.updateArea(this, false, true);
  }

  get lockSize(): boolean {
    return this._lockSize;
  }

  private _visible = true;

  @Input() set visible(v: boolean) {
    this._visible = getInputBoolean(v);

    if (this._visible) {
      this.split.showArea(this);
      this.renderer.removeClass(this.elRef.nativeElement, 'ngx-hidden');
    } else {
      this.split.hideArea(this);
      this.renderer.addClass(this.elRef.nativeElement, 'ngx-hidden');
    }
  }

  get visible(): boolean {
    return this._visible;
  }

  private transitionListener: Function;
  private readonly lockListeners: Array<Function> = [];

  constructor(
    private ngZone: NgZone,
    public elRef: ElementRef,
    private renderer: Renderer2,
    private split: SplitComponent
  ) {
    this.renderer.addClass(this.elRef.nativeElement, 'ui-split-area');
  }

  public ngOnInit(): void {
    this.split.addArea(this);

    this.ngZone.runOutsideAngular(() => {
      this.transitionListener = this.renderer.listen(
        this.elRef.nativeElement,
        'transitionend',
        (event: TransitionEvent) => {
          // Limit only flex-basis transition to trigger the event
          if (event.propertyName === 'flex-basis') {
            this.split.notify('transitionEnd', -1);
          }
        }
      );
    });
  }

  public setStyleOrder(value: number): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
  }

  public setStyleFlex(
    grow: number,
    shrink: number,
    basis: string,
    isMin: boolean,
    isMax: boolean
  ): void {
    // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
    this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);

    if (isMin === true)
      this.renderer.addClass(this.elRef.nativeElement, 'ngx-min');
    else this.renderer.removeClass(this.elRef.nativeElement, 'ngx-min');

    if (isMax === true)
      this.renderer.addClass(this.elRef.nativeElement, 'ngx-max');
    else this.renderer.removeClass(this.elRef.nativeElement, 'ngx-max');
  }

  public lockEvents(): void {
    this.ngZone.runOutsideAngular(() => {
      this.lockListeners.push(
        this.renderer.listen(
          this.elRef.nativeElement,
          'selectstart',
          (e: Event) => false
        )
      );
      this.lockListeners.push(
        this.renderer.listen(
          this.elRef.nativeElement,
          'dragstart',
          (e: Event) => false
        )
      );
    });
  }

  public unlockEvents(): void {
    while (this.lockListeners.length > 0) {
      const fct = this.lockListeners.pop();
      if (fct) fct();
    }
  }

  public ngOnDestroy(): void {
    this.unlockEvents();

    if (this.transitionListener) {
      this.transitionListener();
    }

    this.split.removeArea(this);
  }
}
