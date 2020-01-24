import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  users: User[] = [];

  constructor(private service: UserService, public router: Router) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      data => {
        this.users = data;
      },
      (err) => {
        console.warn(`Error. Users list is empty.`);
      }
    );

  }

}
