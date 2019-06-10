import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorate',
  templateUrl: './favorate.component.html',
  styleUrls: ['./favorate.component.css']
})
export class FavorateComponent implements OnInit {

  @Input('is-favorate') isFavorate = false;
  @Output() change = new EventEmitter();//the name of the field should be exactly
                     //the same as the event we want to raise(change)
  onClick() {
    this.isFavorate = !this.isFavorate;
    this.change.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
