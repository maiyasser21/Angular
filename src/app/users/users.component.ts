import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../Shared Classes and types/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  errorMessage:string;
  constructor(private userService:UserService)
  {

  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:data=>this.users=data,
      error:error=>this.errorMessage=error

  });

  }

}
