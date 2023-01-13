import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormIndexeddbComponent } from './form-indexeddb/form-indexeddb.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LockOperatingPageComponent } from './lock-operating-page/lock-operating-page.component';
import { LogPageComponent } from './log-page/log-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculateComponent } from './calculate/calculate.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ListMongoDBComponent } from './list-mongo-db/list-mongo-db.component';
import { CelciusComponent } from './celcius/celcius.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { WeatherComponent } from './weather/weather.component';
import { MatSelectModule } from '@angular/material/select';








@NgModule({
  declarations: [
    AppComponent,
    FormIndexeddbComponent,
    ToolbarComponent,
    LockOperatingPageComponent,
    LogPageComponent,
    HomePageComponent,
    CalculateComponent,
    ListMongoDBComponent,
    CelciusComponent,
    FahrenheitComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
