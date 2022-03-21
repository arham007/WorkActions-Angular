import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent implements OnInit {
  @Input() name: any;
  constructor() { }

  ngOnInit(): void {
  }

}
