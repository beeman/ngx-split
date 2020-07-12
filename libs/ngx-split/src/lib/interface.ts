import { SplitAreaDirective } from './directive/splitArea.directive';

export interface IPoint {
  x: number;
  y: number;
}

export type IAreaDir = 'ltr' | 'rtl';
export type IAreaDirection = 'horizontal' | 'vertical';
export type IAreaSize = number | '*';
export type IAreaUnit = 'percent' | 'pixel';

export interface IArea {
  component: SplitAreaDirective;
  order: number;
  size: IAreaSize;
  minSize: IAreaSize;
  maxSize: IAreaSize;
}

// CREATED ON DRAG START

export interface ISplitSnapshot {
  gutterNum: number;
  allAreasSizePixel: number;
  allInvolvedAreasSizePercent: number;
  lastSteppedOffset: number;
  areasBeforeGutter: Array<IAreaSnapshot>;
  areasAfterGutter: Array<IAreaSnapshot>;
}

export interface IAreaSnapshot {
  area: IArea;
  sizePixelAtStart: number;
  sizePercentAtStart: number;
}

// CREATED ON DRAG PROGRESS

export interface ISplitSideAbsorptionCapacity {
  remain: number;
  list: Array<IAreaAbsorptionCapacity>;
}

export interface IAreaAbsorptionCapacity {
  areaSnapshot: IAreaSnapshot;
  pixelAbsorb: number;
  percentAfterAbsorption: number;
  pixelRemain: number;
}

// CREATED TO SEND OUTSIDE

export interface IOutputData {
  gutterNum: number;
  sizes: IOutputAreaSizes;
}

export interface IOutputAreaSizes extends Array<IAreaSize> {}
