import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template:`
  <ul>
    <li>{{ fyrik.name | uppercase | lowercase }}</li>
    <li>{{ fyrik.age | number:'3.0' }}</li>
    <li>{{ fyrik.gender }}</li>
    <li>{{ fyrik.height | number:'3.0-0' }}</li>
    <li>{{ fyrik.carPrice | currency:'NZD':true:'4.2' }}</li>
    <li>{{ fyrik.carOdometer }}</li>
    <li>{{ fyrik.releaseDate | date:shortDate }}</li>
  <ul>
  `
})
export class CourseComponent{

  fyrik = {
    name: "Fyrik",
    age: 24,
    gender: "male",
    height: 170.05,
    carPrice: 4400,
    carOdometer: 110785,
    releaseDate: new Date(1994,7,12) 
    // For all date pipes used in HTML,
    // go to angular official website and 
    // search for "date pipes".
  }

}
