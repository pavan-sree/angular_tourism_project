import { Component } from '@angular/core';
import {districts} from 'src/assets/data';
@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent {
   districts:any;
   ngOnInit(){
    let id=localStorage.getItem("title")
    console.log("jh",id)
    this.districts= districts.filter(e=>e.name==id)
    console.log(this.districts)
   }
}
