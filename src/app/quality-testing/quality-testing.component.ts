import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-quality-testing',
  templateUrl: './quality-testing.component.html',
  styleUrls: ['./quality-testing.component.css']
})
export class QualityTestingComponent implements OnInit {

  constructor(private _userService:UsersService) {
    this._userService.activeRouteBehaviorSubject$.next("quality-assurance-testing")
   }

  ngOnInit(): void {
  }

}
