import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';


@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css']
})
export class FahrenheitComponent implements OnInit {
  constructor(public temperatureService: TemperatureService) { }

  ngOnInit(): void {
  }

}
