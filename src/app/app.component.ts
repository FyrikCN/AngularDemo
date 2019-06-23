import { likeObject } from './like/like.component';
import { Component } from '@angular/core';
import { favObject } from './favorate/favorate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayOfObjs;
  partlyEmptyObj = {
    title: "title",
    innerObj: {
      name: "name"
    }
  };

  getCourses() {
    this.arrayOfObjs = [
      {name: "Fyrik", gender: "male"},
      {name: "Koko", gender: "female"},
      {name: "Uzi", gender: "unknown"}
    ];
  }

}
