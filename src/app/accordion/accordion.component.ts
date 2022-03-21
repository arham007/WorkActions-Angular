import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBell, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() value: any;

  faBell = faBell as IconProp
  faChevronDown = faChevronDown as IconProp
  faTrash = faTrash as IconProp
  name = false
  constructor() { }
  ngOnInit(): void { }

  getToggle() {
    this.name = !this.name
  }
}
