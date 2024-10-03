import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(private postService: PostService){}

  onAddPost(form: NgForm){
    if(form.invalid) return;

    const postData = {
      title: form.value.title,
      content: form.value.content
    };
    this.postService.addPosts(postData).subscribe(response => {
      console.log('Post added: ', response);
    });
  }
}


