import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.css']
})
export class Panel1Component implements OnInit, OnDestroy {

  private QuerySubscription$!: Subscription

  headlink: { name: string; id: string; link: string }[] = [];
  boardlink: { name: string; id: string; link: string }[] = [];
  flag = true;
  id: any;
  panelHide: any;
  faSearch = faSearch as IconProp

  constructor(private _userServices: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.headlink = this._userServices.panelOneHeadLinks;
    this.boardlink = this._userServices.panelOneBoardLinks;
    this.QuerySubscription$ = this._userServices.activeRouteBehaviorSubject$.subscribe((id) => {
      this.id = id
      // console.log(id)
    })



  }


  addItem(data: { name: string; id: string, link: string }) {
    this._userServices.updateHeadlinks(data);



  }

  ngOnDestroy(): void {
    if (this.QuerySubscription$) { this.QuerySubscription$.unsubscribe(); }
  }
}
