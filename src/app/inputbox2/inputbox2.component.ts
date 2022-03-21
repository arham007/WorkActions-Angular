import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inputbox2',
  templateUrl: './inputbox2.component.html',
  styleUrls: ['./inputbox2.component.css']
})
export class Inputbox2Component implements OnInit {
  @Input() name: any;
  faChevronDown = faChevronDown as IconProp
  constructor() { }

  ngOnInit(): void {
  }


}
