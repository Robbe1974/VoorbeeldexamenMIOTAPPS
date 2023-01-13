import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  celsius: number = 0;
  fahrenheit: number = 0;

  convertToFahrenheit(): number {
    return (this.celsius * 9/5) + 32;
  }

  convertToCelsius(): number {
    return (this.fahrenheit - 32) * (5/9);
  }
}