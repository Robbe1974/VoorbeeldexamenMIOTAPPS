import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css'],
})
export class LogPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async LoadLogs() {
    console.log('LoadLogs');
    let response = await fetch(
      'https://api.nuki.io/smartlock/645574324/log?limit=200',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization:
            'Bearer bdeb6ae900e63ad6e8c13afa19fa2ce4b053838c7d1efd91cddc209b95b6acec74740b2c3602946e',
        },
      }
    ).then((res) => res.json())
    .then((data) => {
      console.log(data);
      const app = document.getElementById('divLog');
      const p = document.createElement('pre');
      p.textContent = JSON.stringify(data, null, 2);
      app?.appendChild(p);
    });
  }
}
