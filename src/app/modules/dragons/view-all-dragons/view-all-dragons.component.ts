import { Component } from '@angular/core';
import { DragonClass } from 'src/app/core/services/DragonModel';
import { DragonService } from 'src/app/core/services/dragons.service';
@Component({
  selector: 'app-view-all-dragons',
  templateUrl: './view-all-dragons.component.html',
  styleUrls: ['./view-all-dragons.component.scss']
})
export class ViewAllDragonsComponent {



  DragonClass: DragonClass[] = []

  constructor(private DragonService: DragonService) { }

  ngOnInit(): void {
    this.DragonService
      .getAllDragon()
      .subscribe({
        next: (resp: any) => {
          console.log(resp.data)
          this.DragonClass = resp['data']
        },
        error: (err: any) => {
          console.log(err);
        },
      });

  }

  deleteBlog(itemID: any) { }




}
