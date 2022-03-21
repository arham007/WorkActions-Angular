import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-personalform',
  templateUrl: './personalform.component.html',
  styleUrls: ['./personalform.component.css']
})
export class PersonalformComponent implements OnInit, OnDestroy {

  faChevronDown = faChevronDown as IconProp

  personalInfoForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    tags: new FormControl('')
  })

  constructor(private _userServices: UsersService) {
    this.personalInfoForm.setValue(this._userServices.personalForm)

  }

  ngOnInit(): void {
  }
  personalForm() {


    this._userServices.personalForm = this.personalInfoForm.value
  }

  ngOnDestroy() {
    this.personalForm()
  }
}
