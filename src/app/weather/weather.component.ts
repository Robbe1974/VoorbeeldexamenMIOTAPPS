import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  ApiKey: string = '7d61b21b05c482207f096b0142f69bf5';
  weather: any;
  constructor(private http: HttpClient) {}
  getWeather() {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.ApiKey}&units=metric`)
      .subscribe(data => {
        this.weather = data;
      });
  }
  
  ngOnInit(): void {
  }

}
