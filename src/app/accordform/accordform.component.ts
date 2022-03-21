import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-accordform',
  templateUrl: './accordform.component.html',
  styleUrls: ['./accordform.component.css']
})
export class AccordformComponent implements OnInit {

  accordFormB = new FormGroup({
    organizationName: new FormControl(''),
    role: new FormControl('')
  })
  constructor(private _userService: UsersService) {

    this.accordFormB.setValue(this._userService.accordForm)
  }

  ngOnInit(): void {
  }



  ngOnDestroy() {

    this._userService.accordForm = this.accordFormB.value;

  }
}
