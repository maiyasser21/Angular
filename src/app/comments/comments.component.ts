import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../Shared Classes and types/IComment';
import { ActivatedRoute, Router } from '@angular/router';
import { PostCommentService } from '../services/post-comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() postId:any;
  comments:IComment[];
  errorMessage:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private postComment:PostCommentService){}

  ngOnInit(): void {
      this.postComment.getComments(this.postId).subscribe(
        {
          next:data=>this.comments=data,
          error:error=>this.errorMessage=error,
        }
      )
  }

}
