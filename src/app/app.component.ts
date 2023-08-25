import { Component, OnInit } from '@angular/core';
import { PlantService } from './api.service';
import { PlantInterface } from './plant.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
})
export class AppComponent implements OnInit{
  title="PlantVerse"
  searchValue='';
  plants: PlantInterface[]=[];
  searchForm=this.fb.nonNullable.group({
    searchValue:'',
  });
 constructor(private plantService: PlantService, private fb: FormBuilder){}
  ngOnInit():void{
    this.fetchData();
  }
  fetchData():void{
      this.plantService.getPlants().subscribe((plants) =>{
      this.plants=plants;
  });
  }
  onSearchSubmit():void{
    this.searchValue=this.searchForm.value.searchValue?? '';
    this.fetchData();
  }
 
}
