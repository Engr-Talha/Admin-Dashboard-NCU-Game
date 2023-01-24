import { Component } from '@angular/core';
import { Users } from 'src/app/core/services/UsersModels';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.scss']
})
export class ViewallusersComponent {

  Users: Users[] = []
  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.getAllUsers()
      .subscribe({
        next: (resp: any) => {
          console.log(resp.data)
          this.Users = resp['data']
        },
        error: (err: any) => {
          console.log(err);
          this.Users = [{
            "id": 8,
            "email": "user1@gmail.com",
            "password": "$2b$10$8AmS57hT5g8ldyao8Ds2COKD7cubChrMZl8rCue5K9xtKA20smN1K",
            "isAdmin": false,
            "isModerator": null,
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlcjEiLCJpZCI6MSwiaWF0IjoxNjczOTg3NjMxfQ.t2Nx8TYofJwnt75UUgIlyqexsc1xcSERR81h8hv5TCw",
            "verificationToken": null,
            "isVerified": true,
            "invite": 0,
            "username": "user1",
            "profileImage": null,
            "description": null,
            "coverImage": null,
            "backgroundImage": null,
            "country": null,
            "xp": 0,
            "battleRank": 0,
            "gems": 50,
            "aura": null,
            "createdAt": "2023-01-17T20:33:01.265Z",
            "updatedAt": "2023-01-17T20:33:51.139Z",
            "LevelId": 1
          },
          {
            "id": 3,
            "email": "admin@gmail.com",
            "password": "$2b$10$ld6WTtppF1iYQ/E4nyrPAOk1UjNci1TK0BASjI1BIqRujnJI0s.am",
            "isAdmin": true,
            "isModerator": null,
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpZCI6MywiaWF0IjoxNjczOTg4Njc4fQ.fegjbSeJ0jTOu330w2X7he57-J3FjCTX0ZozlyWj5Fc",
            "verificationToken": null,
            "isVerified": false,
            "invite": 0,
            "username": "admin",
            "profileImage": null,
            "description": null,
            "coverImage": null,
            "backgroundImage": null,
            "country": null,
            "xp": 0,
            "battleRank": 0,
            "gems": 0,
            "aura": null,
            "createdAt": "2023-01-17T20:33:01.381Z",
            "updatedAt": "2023-01-17T20:51:18.091Z",
            "LevelId": null
          }]

        }


      });

  }

  deleteUser(itemID: any) { }

}
