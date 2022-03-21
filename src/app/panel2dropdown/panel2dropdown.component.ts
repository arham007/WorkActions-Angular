import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-panel2dropdown',
  templateUrl: './panel2dropdown.component.html',
  styleUrls: ['./panel2dropdown.component.css']
})
export class Panel2dropdownComponent implements OnInit {
  @Input() name: any;
  faChevronDown = faChevronDown as IconProp
  constructor() { }

  ngOnInit(): void {
  }

}
