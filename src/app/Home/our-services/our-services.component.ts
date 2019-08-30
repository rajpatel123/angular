import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/service/services.service';
import { Our_service } from './our-service.model';

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  service:Our_service=[];

  constructor(private http:Services) { }

  ngOnInit() {
    this.http.getdata2().subscribe(data=>{
      console.log("data==>",data);
      this.service=data['Services'];
    })
  }

}
