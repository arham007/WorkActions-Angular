import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faListUl, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  faBell = faBell as IconProp
  faChevronCircleDown = faChevronCircleDown as IconProp
  faChevronDown = faChevronDown as IconProp
  faListUl = faListUl as IconProp
  faTrash = faTrash as IconProp


  constructor(private _userService: UsersService,
    private _route: ActivatedRoute) {
    this._userService.activeRouteBehaviorSubject$.next('create-new-contact')


  }

  ngOnInit(): void {

  }




}
