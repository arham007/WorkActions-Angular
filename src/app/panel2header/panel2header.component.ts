import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel2header',
  templateUrl: './panel2header.component.html',
  styleUrls: ['./panel2header.component.css']
})
export class Panel2headerComponent implements OnInit, OnDestroy {

  private QuerySubscription$!: Subscription;

  public links: any;
  public id: any;
  public i: any;

  public faXmark = faXmark as IconProp
  public faBell = faBell as IconProp

  constructor(private _userService: UsersService,
    private _router: Router) { }

  ngOnInit() {
    this.QuerySubscription$ = this._userService.activeRouteBehaviorSubject$.subscribe((link) => {
      this.id = link;
      this.links = this._userService.headLinks
    })



  }


  deleteHeadLink(data: { name: string, id: string, link: string }) {
    this._userService.deleteHeadlink(data)
  }

  hidePanel() {
    //website responsive panel Hide//
    let b = this._userService.activeStateBehaviourSubject$.value.leftIcon;

    this._userService.activeStateBehaviourSubject$.next({
      leftIcon: !b, rightIcon: this._userService.activeStateBehaviourSubject$.value.rightIcon
    })

    // Mobile ResponsiveHide //

    let a = this._userService.activeResponsiveBehaviourSubject$.value.leftIcon;
    this._userService.activeResponsiveBehaviourSubject$.next({
      leftIcon: !a, rightIcon: a
    })
  }

  hideRight() {
    //Website Responsive //
    let b = this._userService.activeStateBehaviourSubject$.value.rightIcon;
    this._userService.activeStateBehaviourSubject$.next({
      leftIcon: this._userService.activeStateBehaviourSubject$.value.leftIcon, rightIcon: !b
    })

    //Mobile Responsive //
    let a = this._userService.activeResponsiveBehaviourSubject$.value.rightIcon;
    this._userService.activeResponsiveBehaviourSubject$.next({
      leftIcon: a, rightIcon: !a
    })
  }

  ngOnDestroy(): void {
    if (this.QuerySubscription$) { this.QuerySubscription$.unsubscribe(); }
  }

}
