import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;
  operation: string = "";
  result: number = 0;

  constructor(private http: HttpClient) {}


  calculate() {
    const requestBody = {
        number1: this.number1,
        number2: this.number2,
        operation: this.operation
    };
    this.http.post<number>('https://localhost:7222/api/Calculator/calculate', requestBody)
    .pipe(
        map(response => response as number)
    )
    .subscribe(response => {
        this.result = response;
    });
}

  async ngOnInit():  Promise<void> {
}
}
