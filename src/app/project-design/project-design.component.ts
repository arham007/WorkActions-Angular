import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-project-design',
  templateUrl: './project-design.component.html',
  styleUrls: ['./project-design.component.css']
})
export class ProjectDesignComponent implements OnInit {

  constructor(private _userService:UsersService) { 
    this._userService.activeRouteBehaviorSubject$.next('product-design')
  }

  ngOnInit(): void {
  }

}
