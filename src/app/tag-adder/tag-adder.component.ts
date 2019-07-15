import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tag-adder',
  templateUrl: './tag-adder.component.html',
  styleUrls: ['./tag-adder.component.css']
})
export class TagAdderComponent {
  form;

  constructor (fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      tags: fb.array([]),
      contact: fb.group({
        phone: [],
        email:[]
      })
    })
  }

  addTag(tag: HTMLInputElement) {
    this.tags.push(new FormControl(tag.value));
    tag.value = '';
  }

  deleteTag(tag: FormControl) {
    let index = this.tags.controls.indexOf(tag);
    this.tags.removeAt(index);
  }

  get tags() {
    return this.form.get('tags') as FormArray;
  }
}
