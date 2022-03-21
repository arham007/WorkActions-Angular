import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-project-requirement',
  templateUrl: './project-requirement.component.html',
  styleUrls: ['./project-requirement.component.css']
})
export class ProjectRequirementComponent implements OnInit {

 
  constructor( private _userService: UsersService,
    private route: ActivatedRoute) {
  this._userService.activeRouteBehaviorSubject$.next('project-requirement')

     }

  ngOnInit(): void {
  }

}
