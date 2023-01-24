import { Injectable } from '@angular/core';
import { ACCESS_TOKEN } from '../utils/Constants';
import { StorageService } from './StorageService';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public userProfile: any;
  constructor(private storageService: StorageService) { }

  isUserLoggedIn(): boolean {
    return typeof this.storageService.getItemWithoutEncryption(ACCESS_TOKEN) ==
      'undefined'
      ? false
      : true;
  }
}
