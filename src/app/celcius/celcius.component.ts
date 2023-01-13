import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-celcius',
  templateUrl: './celcius.component.html',
  styleUrls: ['./celcius.component.css']
  
})
export class CelciusComponent implements OnInit {

  constructor(public temperatureService: TemperatureService) { }
  ngOnInit(): void {
  }

}
