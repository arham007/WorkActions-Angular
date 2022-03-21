import { Component, NgZone } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workactions';
  checkLeft: any;  //WebResponsive
  checkRight: any; //WebResponsive//
  showLeft: any; //mobileResponsive
  showRight: any; //mobileResponsive
  observer: any;
  width = 500
  constructor(private _userService: UsersService, private zone: NgZone) { }
  ngOnInit() {
    this.observer = new ResizeObserver(entries => {
      this.zone.run(() => {
        this.width = entries[0].contentRect.width;
        // console.log(this.width)
        if (this.width >= 1150) {
          // Web Responsive Panel 
          this._userService.activeResponsiveBehaviourSubject$.subscribe(data => {
            this.showLeft = false
            this.showRight = false

          })

          this._userService.activeStateBehaviourSubject$.subscribe(data => {
            this.checkLeft = data.leftIcon,
              this.checkRight = data.rightIcon
          })

          this._userService.atBreakPoint()
        }


        else {
          // Mobile Responsive Panel 
          this._userService.activeStateBehaviourSubject$.subscribe(data => {
            this.checkLeft = false,
              this.checkRight = false
          })

          this._userService.activeResponsiveBehaviourSubject$.subscribe(data => {


            this.showLeft = data.leftIcon
            this.showRight = data.rightIcon

          })
        }
      });
    });
    this.observer.observe(document.body);
  }

}
