import { likeObject } from './like/like.component';
import { Component } from '@angular/core';
import { favObject } from './favorate/favorate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  audience = ["Fyrik", "Koko"];
  viewType = "other";
  /*
  title = 'ngdemo';
  post = {
    postTitle: "postTitle",
    isFavorate: true
  };

  tweet = {
    post: "...",
    isLiked: false,
    likesCount: 10
  }

  onFavorateChange(favorateBoolean: favObject) {
    console.log("Favorate clicked: ", favorateBoolean.emitValue);
  }
*/
}
