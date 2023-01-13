import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormIndexeddbComponent } from './form-indexeddb/form-indexeddb.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LockOperatingPageComponent } from './lock-operating-page/lock-operating-page.component';
import { LogPageComponent } from './log-page/log-page.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ListMongoDBComponent } from './list-mongo-db/list-mongo-db.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { CelciusComponent } from './celcius/celcius.component';
import { WeatherComponent } from './weather/weather.component';



const routes: Routes = [
  {path: 'Form', component: FormIndexeddbComponent},
  {path: 'Lock', component: LockOperatingPageComponent},
  {path: 'Log', component: LogPageComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'Calculate', component: CalculateComponent},
  {path: 'ListMongoDB', component: ListMongoDBComponent},
  {path: 'Fahrenheit', component: FahrenheitComponent},
  {path: 'Celcius', component: CelciusComponent},
  {path: 'Weather', component: WeatherComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
