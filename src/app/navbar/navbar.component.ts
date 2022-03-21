import { Component, OnInit } from '@angular/core';
import { faBell, faHouse, faUserPlus, faPhoneAlt, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBell = faBell as IconProp;
  faHouse = faHouse as IconProp;
  faUserPlus = faUserPlus as IconProp
  faPhoneAlt = faPhoneAlt as IconProp
  faGear = faGear as IconProp
  faArrowRightFromBracket = faArrowRightFromBracket as IconProp
  constructor() { }

  ngOnInit(): void {
  }


}
