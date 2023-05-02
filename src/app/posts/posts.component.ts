import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  posts:any[];
  errorMessage:any;
  comments:any[];
  constructor(private postService:PostsService,private router:Router,private activatedRoute:ActivatedRoute)
{}
ngOnInit(): void {

  this.postService.getPosts().subscribe({
    next:data=>this.posts=data,
    error:error=>this.errorMessage=error
  });
}

  showComments(postId:number){
    this.router.navigate(['/posts',postId]);
  }


}
