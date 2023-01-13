import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as localforage from 'localforage';

@Component({
  selector: 'app-lock-operating-page',
  templateUrl: './lock-operating-page.component.html',
  styleUrls: ['./lock-operating-page.component.css'],
})
export class LockOperatingPageComponent implements OnInit {
  ShowLockOpen: boolean = false;
  ShowLockClosed: boolean = false;
  ShowLastUpdate: boolean = true;
  NukiID: string = '';
  NukiWebLink: string = 'https://api.nuki.io/smartlock/';
  Bearer: string = '';
  BearerLink: string = 'Bearer ';
  public Status  = '';
  
  constructor() {}

  ngOnInit(): void {
    
    localforage.config({
      name: 'Nuki-App',
      storeName: 'Settings',
    });
    localforage.getItem('NukiID').then((value) => {
      this.NukiID = value as string;
    });
    localforage.getItem('bearer').then((value) => {
      this.Bearer = value as string;
    });
    setTimeout(() => {
      this.GetStatus();
    }, 500);
  }

  async NukiLock() {
    var action = '/action/lock';
    var res = this.NukiWebLink.concat(this.NukiID, action);
    var res2 = this.BearerLink.concat(this.Bearer);
    let response = await fetch(res, {
      method: 'post',
      headers: {
        accept: 'application/json',
        authorization: res2,
      },
    }).then((data) => {
      //console.log(data);
      if (data.status === 204) console.log('Locking...');
    });
    setTimeout(() => {
      this.GetStatus();
    }, 2500);
  }

  async NukiUnLock() {
    var action = '/action/unlock';
    var res = this.NukiWebLink.concat(this.NukiID, action);
    var res2 = this.BearerLink.concat(this.Bearer);
    let response = await fetch(res, {
      method: 'post',
      headers: {
        accept: 'application/json',
        authorization: res2,
      },
    }).then((data) => {
      //console.log(data);
      if (data.status === 204) console.log('Unlocking...');
    });
    setTimeout(() => {
      this.GetStatus();
    }, 2500);
  }

  async GetStatus() {
    const now = new Date();
    let response = await fetch(this.NukiWebLink, {
      method: 'get',
      headers: {
        accept: 'application/json',
        authorization:
          'Bearer bdeb6ae900e63ad6e8c13afa19fa2ce4b053838c7d1efd91cddc209b95b6acec74740b2c3602946e',
      },
    })
      .then((data) => data.json())
      .then((json) => {
        switch (json[0].state.state) {
          case 1:
            console.log('Slot gesloten');
            this.Status = 'Vergrendeld\r\nLaatste volledige synchronisatie:\r\n%s'.replace('%s', now.toLocaleString());
            this.ShowLockOpen = false;
            this.ShowLockClosed = true;
            break;
          case 2:
            console.log('Slot wordt geopend');
            break;
          case 3:
           console.log('Slot open')
            this.Status = 'Ontgrendeld\r\nLaatste volledige synchronisatie:\r\n%s'.replace('%s', now.toLocaleString());
            this.ShowLockClosed = false;
            this.ShowLockOpen = true;
            break;
          case 4:
            console.log('Slot wordt gesloten');
            break;
          default:
            console.log('Slot status onbekend');
        }
      });
  }
}
