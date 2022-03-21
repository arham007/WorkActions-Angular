import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  panelOneHeadLinks = [{ name: "Project Requirments", id: "project-requirement", link: "project-requirement" }, { name: "Product Design", id: "product-design", link: 'product-design' }, { name: "Support", id: "support", link: "support" }, { name: "Quality Assurance & Testing", id: "quality-assurance-testing", link: "quality-assurance-testing" }]
  panelOneBoardLinks = [{ name: "Design Board", id: "design-board", link: 'board/design-board' }, { name: "Development Board", id: "development-board", link: 'board/development-board' }, { name: "Testing Board", id: "testing-board", link: 'board/testing-board' }]
  users = [
    { name: "Jhon Doe", time: "2 min ago..", link: 'teams/jhon-doe', id: 'jhon-doe', image: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" },
    { name: "Ali", time: "5 min ago..", link: 'teams/ali', id: 'ali', image: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" },
    { name: "Armash", time: "10 min ago..", link: 'teams/armash', id: 'armash', image: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" },
    { name: "Taha", time: "20 min ago..", link: 'teams/taha', id: 'taha', image: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" },
    { name: "Amad", time: "25 min ago..", link: 'teams/amad', id: 'amad', image: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" },
    { name: "Arham", time: "15 min ago..", link: 'teams/arham', id: 'arham', image: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" },
    { name: "Sikander", time: "9 min ago..", link: 'teams/sikander', id: 'sikander', image: "https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" },


  ];
  headLinks = [{ name: "Create new Contact", id: "create-new-contact", link: "create-new-contact" }, { name: 'Tab2', id: "tab2", link: "tab2" }];
  personalForm = {
    title: '',
    firstName: '',
    lastName: '',
    tags: ''
  }
  contactForm = {
    phone: '',
    mobile: '',
    email: '',
    workAction: '',
    facebook: '',
    twitter: ''
  }

  accordForm = {
    organizationName: '', role: ''
  }
  officeAdressForm = {
    type: '',
    unit: '',
    block: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  }
  public activeRouteBehaviorSubject$ = new BehaviorSubject("");

  public activeStateBehaviourSubject$ = new BehaviorSubject({
    leftIcon: false,
    rightIcon: false
  })
  public activeResponsiveBehaviourSubject$ = new BehaviorSubject({
    leftIcon: false,
    rightIcon: false
  })



  constructor(private _router: Router) {
    if (localStorage.getItem("links") == "[]") {
      localStorage.setItem("links", JSON.stringify(this.headLinks))

    }
    let a = localStorage.getItem("links")
    if (a !== null) {
      this.headLinks = JSON.parse(a)
    }





  }

  updateHeadlinks(data: any) {
    let check = this.headLinks.some(e => e.id == data.id)
    if (!check) {
      this.headLinks.push(data)
      localStorage.setItem("links", JSON.stringify(this.headLinks))


    }
  }

  deleteHeadlink(data: { name: string, id: string, link: string }) {
    let index: any;
    this.headLinks.findIndex((item, i) => {
      if (item.id == data.id) {
        index = i
        this.headLinks.splice(i, 1)
        localStorage.setItem("links", JSON.stringify(this.headLinks));

        index = index - 1;
        this._router.navigate([this.headLinks[index]?.link])


      }
    })
  }

  findUserData(id: string) {
    // console.log(id)
    let _checkUser = this.users.find((item: any) => {
      if (item.id == id) {
        return item;
      }
    })

    return _checkUser

  }

  atBreakPoint() {
    let a = this.activeResponsiveBehaviourSubject$.value;

    a.leftIcon = false
    a.rightIcon = false
  }
}
