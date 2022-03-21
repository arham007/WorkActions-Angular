import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit,OnDestroy {
  private QuerySubscription$!:Subscription
  public id:any;
  public data:any;
  constructor(private _userService:UsersService,private route:ActivatedRoute) {

    this.QuerySubscription$=this.route.params.subscribe((params)=>{
      let id=params['id'];
      this.id=id;

      this._userService.activeRouteBehaviorSubject$.next('teams/'+(id || ''))
      this.data=this._userService.findUserData(this.id)
      
    });

   }

  ngOnInit(): void {
    // this._userService.findUserData(this.id)
  }





  ngOnDestroy(): void {
    if (this.QuerySubscription$) { this.QuerySubscription$.unsubscribe(); }
  }

}
