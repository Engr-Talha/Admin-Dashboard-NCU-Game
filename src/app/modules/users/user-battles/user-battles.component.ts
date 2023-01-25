import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-battles',
  templateUrl: './user-battles.component.html',
  styleUrls: ['./user-battles.component.scss'],
})
export class UserBattlesComponent implements OnInit {
  public cols: TableColsI[] = [];
  public battles: any[] = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.cols = [
      { field: 'playerOneUserName', header: 'Player One' },
      { field: 'playerTwoUserName', header: 'Player Two' },
      { field: 'playerOneXp', header: 'Player One XP' },
      { field: 'playerTwoXp', header: 'Player Two XP' },
      { field: 'playerOneDragonName', header: 'Player One Dragon Name' },
      { field: 'playerTwoDragonName', header: 'PLayer Two Dragon Name' },
      { field: 'winner', header: 'Winner' },
      { field: 'time', header: 'Time' },
      { field: 'territory', header: 'Territory' },
    ];
    this.getAllBattles();
  }
  getAllBattles(): void {
    this.userService.getAllUserBattles().subscribe((response: any) => {
      this.mapDataToDataSource(response['data']);
    });
  }
  mapDataToDataSource(responseData: any): void {
    responseData.forEach((element: any) => {
      this.battles.push({
        winner: element.winner,
        playerOneUserName: element.playerOneName,
        playerTwoUserName: element.playerTwoName,
        time: element.time,
        playerOneXp: element.playerOneXp,
        playerTwoXp: element.playerTwoXp,
        playerOneDragonName: element.playerOneDragon,
        playerTwoDragonName: element.playerTwoDragon,
        territory: element.territory,
      });
    });
  }
}
interface TableColsI {
  field: string;
  header: string;
}
interface BattlesI {
  winner: string;
  playerOneUserName: string;
  playerTwoUserName: string;
  time: string;
  playerOneXp: string;
  playerTwoXp: string;
  playerOneDragonName: string;
  playerTwoDragonName: string;
  territory: string;
}
