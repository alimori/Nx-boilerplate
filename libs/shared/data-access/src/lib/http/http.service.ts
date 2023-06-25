import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptions, HttpServiceBaseUrl } from '../models/http.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _baseUrl?: string;

  constructor(
    private _http: HttpClient,
    @Optional() @Inject(HttpServiceBaseUrl) baseUrl?: string
  ) {
    this._baseUrl = baseUrl;
  }

  public get<T>(url: string, options?: HttpOptions): Observable<T> {
    const URL = this.makeUrl(url, options);
    const OPTIONS = this.makeHttpClientOptions(options);
    return this.mapResponse(this._http.get<T>(URL, OPTIONS));
  }

  public post<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    const URL = this.makeUrl(url, options);
    const BODY = this.makeBody(body, options);
    const OPTIONS = this.makeHttpClientOptions(options);
    return this.mapResponse(this._http.post(URL, BODY, OPTIONS));
  }

  public put<T>(url: string, body: any, options?: HttpOptions): Observable<T> {
    const URL = this.makeUrl(url, options);
    const BODY = this.makeBody(body, options);
    const OPTIONS = this.makeHttpClientOptions(options);
    return this.mapResponse(this._http.put(URL, BODY, OPTIONS));
  }

  public delete<T>(url: string, options?: HttpOptions): Observable<T> {
    const URL = this.makeUrl(url, options);
    const OPTIONS = this.makeHttpClientOptions(options);
    return this.mapResponse(this._http.delete(URL, OPTIONS));
  }

  private makeUrl(url: string, options?: HttpOptions) {
    return (options && options.pathType && options.pathType === 'absolute') ? url : (this._baseUrl + url);
  }

  private makeHttpClientOptions(options?: HttpOptions) {
    if (!options) {
      return {};
    }

    const opts: any = {};

    // Query String
    const query = options.query;
    if (typeof query === 'object') {
      let params = new HttpParams();
      for (const key in query) {
        if (query.hasOwnProperty(key)) {
          const value = query[key];
          const type = typeof value;
          if (type === 'string' || type === 'number') {
            params = params.set(key, value);
          }
        }
      }
      opts.params = params;
    }

    // Response Type
    if (options.responseType === 'blob') {
      opts.responseType = 'blob';
    }

    return opts;
  }

  private makeBody(body: any, options?: HttpOptions) {
    body = this.processBodyFields(body);
    if (!options || !options.contentType || options.contentType !== 'multipart/form-data') {
      return body;
    }

    // contentType is multipart/form-data
    const formData = new FormData();
    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        const field = body[key];
        let value;

        if (typeof field === 'string' || field instanceof File) {
          value = field;
        } else if (typeof field === 'number') {
          value = field.toString();
        } else if (typeof field === 'object') {
          value = JSON.stringify(field);
        }

        if (value) {
          formData.append(key, value);
        }
      }
    }
    return formData;
  }

  private processBodyFields(body: any) {
    return body;
  }

  private mapResponse<T>(res: Observable<any>) {
    return res;
  }
}
