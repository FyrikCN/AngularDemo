import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPost()
      .subscribe(
        response => {
          this.posts = response;
          console.log(response);
        }, 
        (error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted.');
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post.id = response['id'];
          this.posts.splice(0, 0, post);
          console.log(post);
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            // this.form.setErrors(error);
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        }, 
        error => {
          alert('An unexpected error occured.');
          console.log(error);
        })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, 
        (error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted.');
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        });
  }
}
