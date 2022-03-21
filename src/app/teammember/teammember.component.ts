import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service"
@Component({
  selector: 'app-teammember',
  templateUrl: './teammember.component.html',
  styleUrls: ['./teammember.component.css']
})
export class TeammemberComponent implements OnInit {
  usersData;
  constructor(private _users: UsersService) {
    this.usersData = _users.users

  }

  ngOnInit(): void {
  }

  addItem(data: any) {
    this._users.updateHeadlinks(data)

  }

}
