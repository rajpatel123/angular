import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/service/services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public slid=[];
  career:boolean=false;
   productEnquery:boolean=false;

  constructor(private http:Services ) { }

  ngOnInit() {
this.http.getdata3().subscribe(data=>{
  this.slid=data['Slider Data']
}) }

Enquery(){
  this.career=true;
  this.productEnquery=false;
 }
 Service(){
   this.career=false;
   this.productEnquery=false;
 }
 product(){
   this.career=false;
   this.productEnquery=true;
 }

}
