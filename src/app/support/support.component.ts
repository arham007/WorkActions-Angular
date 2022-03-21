import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(private _userService:UsersService) {
    this._userService.activeRouteBehaviorSubject$.next('support')
   }

  ngOnInit(): void {
  }

}
