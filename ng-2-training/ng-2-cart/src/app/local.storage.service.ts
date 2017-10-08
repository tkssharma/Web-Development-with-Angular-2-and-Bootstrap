import { Injectable } from '@angular/core';

@Injectable()
export  class LocalStorageService {

  constructor() {}

  get(key: any) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
  }

  set(key:any, value:any) {
    const data = JSON.stringify(value);
    if (data) {
      localStorage.setItem(key, data);
    }
  }

  clearAll() {
    localStorage.clear();
  }
}