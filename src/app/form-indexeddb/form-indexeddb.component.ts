import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
@Component({
  selector: 'app-form-indexeddb',
  templateUrl: './form-indexeddb.component.html',
  styleUrls: ['./form-indexeddb.component.css'],
})
export class FormIndexeddbComponent {
  public model = { NukiID: '' };
  public model2 = { bearer: '' };

  async ngOnInit(): Promise<void> {
    localforage.config({
      name: 'Nuki-App',
      storeName: 'Settings',
      description: 'Settings for Nuki-App',
    });
    this.model.NukiID = (await localforage.getItem('NukiID')) || '';
    this.model2.bearer = (await localforage.getItem('bearer')) || '';
  }

  public async onSubmit() {
    console.log(this.model);
    console.log(this.model2);
    let value = await localforage.setItem('NukiID', this.model.NukiID);
    let value2 = await localforage.setItem('bearer', this.model2.bearer);
  }
}
