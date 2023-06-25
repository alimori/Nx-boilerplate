import { InjectionToken } from '@angular/core';

export const HttpServiceBaseUrl = new InjectionToken('HttpServiceBaseUrl');

export interface HttpOptions {
    query?: any;
    pathType?: 'relative' | 'absolute';
    responseType?: 'json' | 'blob';
    contentType?: 'json' | 'multipart/form-data';
    displayServerErrors?: boolean;
}