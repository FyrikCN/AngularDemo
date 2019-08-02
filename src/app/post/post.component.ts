import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any;
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      this.posts = response;
      console.log(response);
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post.id = response['id'];
        this.posts.splice(0, 0, post);
        console.log(post);
      })
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post['id'], JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }
}
