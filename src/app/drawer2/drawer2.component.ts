import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark, faBell } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-drawer2',
  templateUrl: './drawer2.component.html',
  styleUrls: ['./drawer2.component.css']
})
export class Drawer2Component implements OnInit {

  faXmark = faXmark as IconProp
  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
  }
  hideLeftPanel() {
    let RightIcon = this._userService.activeResponsiveBehaviourSubject$.value.rightIcon;
    this._userService.activeResponsiveBehaviourSubject$.next({
      leftIcon: this._userService.activeResponsiveBehaviourSubject$.value.leftIcon, rightIcon: !RightIcon
    })
  }

}
