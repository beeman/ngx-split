import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ChangelogService {
  private readonly url =
    'https://raw.githubusercontent.com/beeman/ngx-split/main/CHANGELOG.md';
  private cachedMd = '';

  constructor(private http: HttpClient) {}

  getMd(): Observable<string> {
    if (this.cachedMd !== '') {
      return of(this.cachedMd);
    }

    return merge(
      of('Loading..'),
      this.http.get(this.url, { responseType: 'text' }).pipe(
        map((md) => {
          this.cachedMd = md;
          return this.cachedMd;
        }),
        catchError((error) =>
          of(
            `Error:<br>Unable to retrieve CHANGELOG.md from github..<br>Please go to <a href="${this.url}">${this.url}</a> to view it.`
          )
        )
      )
    );
  }
}
