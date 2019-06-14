import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'twitter-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() likesCount: number;
  @Input() isLiked: boolean;
  
  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked? 1 : -1;
  }

}

export interface likeObject {
  emitIsLiked: boolean,
  emitCount: number
}