import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-adder',
  templateUrl: './course-adder.component.html',
  styleUrls: ['./course-adder.component.css']
})
export class CourseAdderComponent {

  submit(f) {
    console.log(f);
  }

  categories = [
    { id: 1, name: "IT Development" },
    { id: 2, name: "Art" }
  ];
}
