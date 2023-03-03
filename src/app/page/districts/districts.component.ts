import { Component } from '@angular/core';
import {districts} from 'src/assets/data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent {
  collection=districts
  constructor(public router : Router){

  }

districts:any;
ngOnInit(){
  this.districts;
}
goTo(id:any){
  localStorage.setItem("title",id);
  this.router.navigate(['/single-page']);
}
}
