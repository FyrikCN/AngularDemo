import { Component } from '@angular/core';
import { favObject } from './favorate/favorate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngdemo';
  post = {
    postTitle: "postTitle",
    isFavorate: true
  }

  counts = 0;

  onFavorateChange(favorateBoolean: favObject) {
    console.log("Favorate clicked: ", favorateBoolean.emitValue);
  }

  onTwitterChange(obj) {
    this.counts = obj.emitCount;
    console.log("Like button clicked:", obj.emitIsLiked, obj.emitCount);
  }
}
