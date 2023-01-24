import { Component } from '@angular/core';
import { TerritoryService } from 'src/app/core/services/territory.service';
import { Territory } from 'src/app/core/Models/Territory';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-all-territory',
  templateUrl: './view-all-territory.component.html',
  styleUrls: ['./view-all-territory.component.scss']
})
export class ViewAllTerritoryComponent {


  TerritoryForm: FormGroup;
  Territory: Territory[]

  constructor(
    private fb: FormBuilder,
    private TerritoryService: TerritoryService,
  ) {
    this.TerritoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, , Validators.minLength(1)]],
      // description: ['', [Validators.required, , Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.TerritoryService.getAllTerritories()
      .subscribe({
        next: (resp: any) => {
          console.log(resp.data)
          this.Territory = resp['data']
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteTerritory(id: any) {
    console.log(id);
    this.TerritoryService.deleteTerritoy(id).subscribe({
      next: (data: any) => {
        this.TerritoryService
          .getAllTerritories()
          .subscribe({
            next: (resp: any) => {
              console.log(resp['data'])
              this.Territory = resp['data']
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });

  }

}
