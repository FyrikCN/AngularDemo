import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template:`
  <h2>{{ title }}</h2>
  <p>{{ article | summary:20 }}</p>
  <i [class]="(isFavorite)? 'fa-star fas' : 'fa-star far'"
    (click)="onClick()">
  </i>
  <h4>Demo</h4>
  <i class="fa-star"
     [class.fas]="isFavorite"
     [class.far]="!isFavorite"
     (click)="onClick()">
  </i>
  `
})
export class CourseComponent{
  title = "Angular Practice - Homework2";

  isFavorite = true;

  onClick() {
    this.isFavorite = !this.isFavorite;
    //this.isFavorite = this.isFavorite ? false : true; 
  }
}
