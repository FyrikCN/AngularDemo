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
}
