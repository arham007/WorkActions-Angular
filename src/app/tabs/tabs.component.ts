import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnDestroy {

  private QuerySubscription$!: Subscription;

  public id: any;

  constructor(
    private _userService: UsersService,
    private route: ActivatedRoute
  ) {

    this.QuerySubscription$ = this.route.params.subscribe((params) => {
      const id = params['id']
      this.id = id;
     
      this._userService.activeRouteBehaviorSubject$.next('board/' + (id || ''))
    });

  }


  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.QuerySubscription$) { this.QuerySubscription$.unsubscribe(); }
  }

}
