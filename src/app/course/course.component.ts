import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template:`
    <input class="inputBox" (keyup.enter)="onKeyUp($event)"/> <br/>
    <input class="inputBox" #text (keyup.enter)="onKeyUp2(text.value)">
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

  onKeyUp($event) {
    console.log("Enter was pressed: ", $event.target.value);
  }

  onKeyUp2(text) {
    console.log("Enter2 was pressed: ", text);
  }

  onDivClick() {
    console.log("Div was clicked.");
  }

  onSave($event) {
    $event.stopPropagation();
    this.isActive = true;
    console.log("Button was clicked.", $event);
  }
  constructor() { }

}
