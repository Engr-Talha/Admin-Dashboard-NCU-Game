import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/StorageService';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
  ) {
    this.initForm();

  }

  ngOnInit(): void { }
  public signinForm: FormGroup = new FormGroup({});
  initForm() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get fc() {
    return this.signinForm.controls;
  }

  onSubmit() {
    console.log("first")
    this.router.navigate(['/dashboard']);

    let data = {
      email: this.fc['email'].value,
      password: this.fc['password'].value,

    }
    console.log(data)
    this.authService
      .signin(data)
      .subscribe(
        (res: any) => {
          console.log(res)
          console.log(res['accessToken']);
          this.storageService.settokenWithoutEncryption(
            res['accessToken']
          );
          this.storageService.setItemWithoutEncryption(
            JSON.stringify(res['User'])
          );

          this.router.navigate(['/dashboard']);
          // routerLink="/dashboard"

          return
        },
        (err) => {
          this.initForm();
          console.log('error', err)
        }
      );
  }
}
