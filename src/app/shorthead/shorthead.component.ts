import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shorthead',
  templateUrl: './shorthead.component.html',
  styleUrls: ['./shorthead.component.css']
})
export class ShortheadComponent implements OnInit {

  @Input() name: any;
  faSearch = faSearch as IconProp
  constructor() { }

  ngOnInit(): void {
  }
}
