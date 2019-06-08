import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorate',
  templateUrl: './favorate.component.html',
  styleUrls: ['./favorate.component.css']
})
export class FavorateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() isFavorate = false;
  onClick() {
    this.isFavorate = !this.isFavorate;
  }
}
