import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/service/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  service=[];
  


  constructor(private http:Services) { }

  ngOnInit() {
    this.http.getdata2().subscribe(data=>{
      console.log('data==>',data);
      this.service=data['Services'];
      
    })


  }

}
