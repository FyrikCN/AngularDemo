import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template:`
    <h2>{{ title }}</h2>
      <input type="text" [(ngModel)]="movieName"/>
      <br>
      {{ movieName | titleCase }}
  `
})
export class CourseComponent{
  title = "Angular Practice - Homework2.2";

  movieName = "Aladdin";

}
