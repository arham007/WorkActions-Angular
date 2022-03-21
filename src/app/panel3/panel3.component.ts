import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faListUl, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel3',
  templateUrl: './panel3.component.html',
  styleUrls: ['./panel3.component.css']
})
export class Panel3Component implements OnInit {
  faBell = faBell as IconProp
  faListUl = faListUl as IconProp
  constructor() { }

  ngOnInit(): void {
  }

}
