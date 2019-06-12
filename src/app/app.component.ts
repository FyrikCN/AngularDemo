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

  onFavorateChange(favorateBoolean: favObject) {
    console.log("Favorate clicked: ", favorateBoolean.emitValue);
  }
}
