import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { Panel1Component } from './panel1/panel1.component';
import { Panel2Component } from './panel2/panel2.component';
import { ShortheadComponent } from './shorthead/shorthead.component';
import { TeammemberComponent } from './teammember/teammember.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { ButtonComponent } from './button/button.component';
import { Inputbox2Component } from './inputbox2/inputbox2.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { Panel3Component } from './panel3/panel3.component';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { Panel2dropdownComponent } from './panel2dropdown/panel2dropdown.component';
import { Panel2headerComponent } from './panel2header/panel2header.component';

import { CreateContactComponent } from './create-contact/create-contact.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProjectRequirementComponent } from './project-requirement/project-requirement.component';
import { ProjectDesignComponent } from './project-design/project-design.component';
import { SupportComponent } from './support/support.component';
import { QualityTestingComponent } from './quality-testing/quality-testing.component';
import { Tab2Component } from './tab2/tab2.component';
import { TeamsComponent } from './teams/teams.component';
import { DrawerComponent } from './drawer/drawer.component';
import { Drawer2Component } from './drawer2/drawer2.component';
import { FormsModule } from '@angular/forms';
import { PersonalformComponent } from './personalform/personalform.component';
import { ContactformComponent } from './contactform/contactform.component';
import { AccordformComponent } from './accordform/accordform.component';
import { OfficeaddressComponent } from './officeaddressform/officeaddress.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    Panel1Component,
    Panel2Component,
    ShortheadComponent,
    TeammemberComponent,
    InputboxComponent,
    ButtonComponent,
    Inputbox2Component,
    AccordionComponent,
    SearchboxComponent,
    Panel3Component,
    SelectboxComponent,
    CheckboxComponent,
    Panel2dropdownComponent,
    Panel2headerComponent,

    CreateContactComponent,
    TabsComponent,
    ProjectRequirementComponent,
    ProjectDesignComponent,
    SupportComponent,
    QualityTestingComponent,
    Tab2Component,
    TeamsComponent,
    DrawerComponent,
    Drawer2Component,
    PersonalformComponent,
    ContactformComponent,
    AccordformComponent,
    OfficeaddressComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
