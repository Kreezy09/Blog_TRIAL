import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }
}
