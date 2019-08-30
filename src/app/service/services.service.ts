import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slider } from '../Home/slider/slider.model';
import { Our_service } from '../Home/our-services/our-service.model';


@Injectable({
  providedIn: 'root'
})
export class Services {

  homeurl='http://vrok.in/taskeeper/list';
  happening='http://vrok.in/taskeeper/happenings';
  service='http://vrok.in/taskeeper/service';

  constructor(private http:HttpClient) { }

getdata():Observable<Slider[]>{
return this.http.get<Slider[]>(this.homeurl);
}

getdata2():Observable<Our_service[]>{
return this.http.get<Our_service[]>(this.homeurl)
}

getdata3(){
  return this.http.get(this.happening);
}

getdata4(){

  return this.http.get(this.service);
}


}
