import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router';
import { DashoardComponent } from '../Home/dashoard/dashoard.component';
import { ServiceComponent } from '../Home/menu/service/service.component';
import { BlogsComponent } from '../Home/menu/blogs/blogs.component';
import { ContactComponent } from '../Home/menu/contact/contact.component';
import { HappeningComponent } from '../Home/menu/happening/happening.component';
import { IndustriesComponent } from '../Home/menu/industries/industries.component';
import { StaffingComponent } from '../Home/menu/staffing/staffing.component';
import { CRMComponent } from '../Home/our-services/crm/crm.component';
import { ProductDeleveryComponent } from '../Home/our-services/product-delevery/product-delevery.component';
import { MobileApplicationComponent } from '../Home/our-services/mobile-application/mobile-application.component';
import { DigitalMarketComponent } from '../Home/our-services/digital-market/digital-market.component';
import { ECommerceComponent } from '../Home/our-services/e-commerce/e-commerce.component';
import { DeliveryProfessionalComponent } from '../Home/our-services/delivery-professional/delivery-professional.component';
import { AboutusComponent } from '../Home/aboutus/aboutus.component';
import { PrivacyComponent } from '../Home/privacy/privacy.component';
import { GameComponent } from '../Home/game/game.component';
import { NewsComponent } from '../Home/news/news.component';

const route:Routes=[
 
  {path:'',component:DashoardComponent},
  {path:'service',component:ServiceComponent},
  {path:'blog',component:BlogsComponent },
  {path:'contact',component:ContactComponent},
  {path:'happening',component:HappeningComponent},
  {path:'industries',component:IndustriesComponent},
  {path:'staffing',component:StaffingComponent},

  // <--our-service-->
{path:'crm',component:CRMComponent},
{path:'product',component:ProductDeleveryComponent},
{path:'Mobile',component:MobileApplicationComponent},
{path:'commerce',component:ECommerceComponent},
{path:'delivery',component:DeliveryProfessionalComponent},
{path:'digital',component:DigitalMarketComponent},

//<-- footer -->
{path:'about',component:AboutusComponent},
{path:'privacy',component:PrivacyComponent},
{path:'game',component:GameComponent},
{path:'news',component:NewsComponent}

]

@NgModule({
  declarations: [],
  imports: [
  
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
