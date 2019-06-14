import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'twitter-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() likesCount = 0;
  @Input() isLiked = false;

  @Output() change = new EventEmitter();
  
  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked? 1 : -1;
    this.change.emit({emitIsLiked: this.isLiked, emitCount: this.likesCount});
  }

}
