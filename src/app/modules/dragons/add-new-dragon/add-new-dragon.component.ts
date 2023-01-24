import { Component, OnInit } from '@angular/core';
import { Dragons } from 'src/app/core/models/DragonModel';
import { TerritoryService } from 'src/app/core/services/territory.service';
import { DragonService } from 'src/app/core/services/dragons.service';
import { Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface Territory {
  "id": number,
  "name": string,
  "imageUrl": string,
  "description": string
}

@Component({
  selector: 'app-add-new-dragon',
  templateUrl: './add-new-dragon.component.html',
  styleUrls: ['./add-new-dragon.component.scss']
})
export class AddNewDragonComponent {

  Dragons: Dragons[];

  TerritoryName: Territory[]
  selectedTerritory: Territory;


  DragonForm: FormGroup;
  file: File | null = null;
  imageUrl: string = '';
  Submitted = false;


  constructor(private fb: FormBuilder, private Router: Router, private TerritoryService: TerritoryService, private DragonService: DragonService) {

    this.DragonForm = this.fb.group({
      name: '',
      dragonClass: '',
      dragonType: '',
      attack: '',
      defense: '',
      health: '',
      unlockLevel: '',
      mapPiece: '',
      price: '',
      skills: this.fb.array([]),
      Attributes: this.fb.array([]),

    });
  }

  ngOnInit(): void {
    this.TerritoryService.getAllTerritories()
      .subscribe({
        next: (resp: any) => {
          console.log(resp.data)
          this.TerritoryName = resp['data']
        },
        error: (err) => {
          console.log(err);
        },
      });

  }

  get skills(): FormArray {
    return this.DragonForm.get('skills') as FormArray;
  }

  get Attributes(): FormArray {
    return this.DragonForm.get('Attributes') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skillname: '',
      skillvalue: '',
    });
  }
  newAttributes(): FormGroup {
    return this.fb.group({
      attributeName: '',
      attributeValue: '',
    });
  }

  addAttributes() {
    this.Attributes.push(this.newAttributes());
  }
  removeAttributes(i: number) {
    this.Attributes.removeAt(i);
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  get fc() {
    return this.DragonForm.controls;
  }
  getImage(event: any) {
    console.log(event);
    const file = (event.target as any).files[0];
    this.file = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  deleteImage() {
    this.file = null;
    this.imageUrl = '';
  }

  onSubmit() {
    let data: any = new FormData();
    data.append('name', this.fc['name'].value);
    data.append('classes', this.fc['dragonClass'].value);
    data.append('type', this.fc['dragonType'].value);
    data.append('attack', this.fc['attack'].value);
    data.append('defense', this.fc['defense'].value);
    data.append('health', this.fc['health'].value);

    data.append('unlockLevel', this.fc['unlockLevel'].value);
    data.append('mapPiece', this.fc['mapPiece'].value);

    data.append('health', this.fc['health'].value);
    data.append('price', this.fc['price'].value);


    data.append('TerritoryId', this.selectedTerritory.id);

    if (this.file) {
      data.append('ImageUrl', this.file);
      // data.append('ImageUrl', null);
    } else if (this.imageUrl) {
      // data.append('postImage', null);
      data.append('ImageUrl', this.imageUrl);
    }
    console.log(data)


    this.DragonService.addDragon(data).subscribe({
      next: (data: any) => {
        console.log(data);

        this.Router.navigate(['/dragons/ViewDragons']);


      },
      error: (error) => {
        console.error('There was an error!', error);

      },
    });
  }



}
