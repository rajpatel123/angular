import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashoardComponent } from './Home/dashoard/dashoard.component';
import { SliderComponent } from './Home/slider/slider.component';
import { MenuComponent } from './Home/menu/menu.component';
import { OurServicesComponent } from './Home/our-services/our-services.component';
import { FooterComponent } from './Home/footer/footer.component';
import { MoreComponent } from './Home/more/more.component';
import { OurProfileComponent } from './Home/our-profile/our-profile.component';
import { ContactComponent } from './Home/menu/contact/contact.component';
import { HappeningComponent } from './Home/menu/happening/happening.component';
import { IndustriesComponent } from './Home/menu/industries/industries.component';
import { ServiceComponent } from './Home/menu/service/service.component';
import { StaffingComponent } from './Home/menu/staffing/staffing.component';
import { OurTechnologyComponent } from './Home/our-technology/our-technology.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BlogsComponent } from './Home/menu/blogs/blogs.component';
import { CRMComponent } from './Home/our-services/crm/crm.component';
import { ProductDeleveryComponent } from './Home/our-services/product-delevery/product-delevery.component';
import { MobileApplicationComponent } from './Home/our-services/mobile-application/mobile-application.component';
import { ECommerceComponent } from './Home/our-services/e-commerce/e-commerce.component';
import { DeliveryProfessionalComponent } from './Home/our-services/delivery-professional/delivery-professional.component';
import { DigitalMarketComponent } from './Home/our-services/digital-market/digital-market.component';
import { AboutusComponent } from './Home/aboutus/aboutus.component';
import { PrivacyComponent } from './Home/privacy/privacy.component';
import { GameComponent } from './Home/game/game.component';
import { NewsComponent } from './Home/news/news.component';



@NgModule({
  declarations: [
    AppComponent,
    DashoardComponent,
    SliderComponent,
    MenuComponent,
    OurServicesComponent,
    FooterComponent,
    MoreComponent,
    OurProfileComponent,
    ContactComponent,
    HappeningComponent,
    IndustriesComponent,
    ServiceComponent,
    StaffingComponent,
    OurTechnologyComponent,
    BlogsComponent,
    CRMComponent,
    ProductDeleveryComponent,
    MobileApplicationComponent,
    ECommerceComponent,
    DeliveryProfessionalComponent,
    DigitalMarketComponent,
    AboutusComponent,
    PrivacyComponent,
    GameComponent,
    NewsComponent
  
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  schemas:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
