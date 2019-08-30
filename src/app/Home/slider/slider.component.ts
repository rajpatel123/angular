import { Component, OnInit } from '@angular/core';
import { Services} from 'src/app/service/services.service';
import { Slider } from './slider.model';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  slider:Slider=[];

  constructor(private http:Services) { }

  ngOnInit() {
    this.http.getdata().subscribe((data)=>{
      console.log("data-->",data);
      this.slider=data['Slider Data'];
    })
  }

}
