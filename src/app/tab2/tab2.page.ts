import { Component,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  public currentItem: any = null;
  public mappingData: any = {};

  constructor() {}
  
 // constructor(private geolocation: Geolocation) {}
  
  //locate(){
    /*this.geolocation.getCurrentPosition().then((resp) => {
      console.log("lat" + resp.coords.latitude + "- long" + resp.coords.longitude)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }*/

}

