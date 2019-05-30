import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "List of Authors";
  
  getTitle() {
    return this.title;
  }

  authors;

  constructor(service:AuthorsService) {
    this.authors = service.getAuthors();
   }

  ngOnInit() {
  }

}
