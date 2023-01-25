import { Injectable } from '@angular/core';
import { ACCESS_TOKEN_CAMEL_CASE, ADMIN_ROLE_LABEL, ROLE_LABEL } from '../utils/Constants';
import { StorageService } from './StorageService';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public userProfile: any;
  constructor(private storageService: StorageService) {}

  isUserLoggedIn(): boolean {
    return typeof this.storageService.getItemWithoutEncryption(ACCESS_TOKEN_CAMEL_CASE) == 'undefined' ||
      this.storageService.getItemWithoutEncryption(ROLE_LABEL) !== ADMIN_ROLE_LABEL
      ? false
      : true;
  }

  setUserProfile(userProfile: any) {
    this.userProfile = userProfile;
  }

  getUserProfile() {
    return this.userProfile;
  }
}
