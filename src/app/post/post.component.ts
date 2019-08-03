import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

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
      .subscribe(response => {
      this.posts = response;
      console.log(response);
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response['id'];
        this.posts.splice(0, 0, post);
        console.log(post);
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }
}
