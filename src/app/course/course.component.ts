import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template:`
    <div (click)="onDivClick()">
    <button 
      class="btn btn-primary" 
      [class.active]="isActive" 
      [style.backgroundColor]="isActive ? 'blue' : 'green'"
      (click)="onSave($event)" 
    >Save</button>
    </div>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class CourseComponent{

  isActive = false;
  colSpan = 2;

  onDivClick() {
    console.log("Div was clicked.");
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("Button was clicked.", $event);
  }
  constructor() { }

}
