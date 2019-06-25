import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title;
  @Input('isActive') isActive = true;

  onHeaderClick() {
    this.isActive = !this.isActive;
  }
  constructor() { }

  ngOnInit() {
  }

}
