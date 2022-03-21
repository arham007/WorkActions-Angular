import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  faChevronDown = faChevronDown as IconProp
  contactForm = new FormGroup({
    phone: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    workAction: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl('')
  })
  constructor(private _userService: UsersService) {
    this.contactForm.setValue(this._userService.contactForm)


  }

  ngOnInit(): void {
  }

  contact() {
    this._userService.contactForm = this.contactForm.value
  }

  ngOnDestroy() {
    this.contact()

  }

}
