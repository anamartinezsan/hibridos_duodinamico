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

}
