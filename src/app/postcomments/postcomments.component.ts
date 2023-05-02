import { Component, OnInit } from '@angular/core';
import { IComment } from '../Shared Classes and types/IComment';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostCommentService } from '../services/post-comment.service';

@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.scss']
})
export class PostcommentsComponent implements OnInit {
  postId:any;
  comments:IComment[];
  errorMessage:any;
  constructor(private activatedRoutes:ActivatedRoute, private router:Router,private postComments:PostCommentService){}
  ngOnInit(): void {
      this.activatedRoutes.paramMap.subscribe((params:ParamMap)=>{
        this.postId=params.get('id');
      });
      this.router.navigate(['comments'],{relativeTo:this.activatedRoutes});
  }

}
