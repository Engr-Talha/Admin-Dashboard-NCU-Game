import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.scss'],
})
export class ViewUserDetailsComponent implements OnInit {
  constructor(private userService: UsersService, private sharedService: SharedService) {}
  public battles: any[] = [];
  public user: any = '';
  ngOnInit(): void {
    this.user = this.sharedService.getUserProfile();
    this.getUserBattles();
  }

  getUserBattles() {
    this.userService.getUserBattlesById(this.user.id).subscribe((response: any) => {
      this.battles = response['data'];
    });
  }
}
