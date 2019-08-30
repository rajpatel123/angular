import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/service/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  service=[];
  blog = [];


  constructor(private http:Services) { }

  ngOnInit() {
    this.http.getdata4().subscribe(data=>{
      this.service=data['Slider Data'];
      this.blog=data['Blogs'];
    })


  }

}
