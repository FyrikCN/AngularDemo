import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorate',
  templateUrl: './favorate.component.html',
  styleUrls: ['./favorate.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavorateComponent {

  @Input('is-favorate') isFavorate = false;
  @Output() change = new EventEmitter();//the name of the field should be exactly
                     //the same as the event we want to raise(change)
  onClick() {
    this.isFavorate = !this.isFavorate;
    this.change.emit({emitValue: this.isFavorate});
  }

}

export interface favObject {
  emitValue: boolean
}
