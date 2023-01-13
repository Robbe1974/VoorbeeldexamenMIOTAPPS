import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.css']
})
export class WeatherStatusComponent implements OnInit {
  @Input() weather: any;
  iconUrl: string = '';
  constructor() { }

  ngOnInit(): void {
    this.iconUrl = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;
  }
  }


