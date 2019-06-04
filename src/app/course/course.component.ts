import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template:`
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
  `
})
export class CourseComponent{

  email = "fyrik@gmail.com";
  onKeyUp() {
    console.log("Enter was pressed: ", this.email);
  }

}
