import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark, faBell } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  faXmark = faXmark as IconProp
  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
  }

  hideResponsivePanel() {

    let LeftIcon = this._userService.activeResponsiveBehaviourSubject$.value.leftIcon;
    this._userService.activeResponsiveBehaviourSubject$.next({
      leftIcon: !LeftIcon, rightIcon: this._userService.activeResponsiveBehaviourSubject$.value.rightIcon
    })
  }
}
