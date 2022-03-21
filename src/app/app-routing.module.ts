import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ProjectDesignComponent } from './project-design/project-design.component';
import { ProjectRequirementComponent } from './project-requirement/project-requirement.component';
import { QualityTestingComponent } from './quality-testing/quality-testing.component';
import { SupportComponent } from './support/support.component';
import { Tab2Component } from './tab2/tab2.component';
import { TabsComponent } from './tabs/tabs.component';
import { TeamsComponent } from './teams/teams.component';




const routes: Routes = [
  {path:"create-new-contact",component:CreateContactComponent},
  {path:"project-requirement",component:ProjectRequirementComponent},
  {path:"product-design",component:ProjectDesignComponent},
  {path:"support",component:SupportComponent}, 
  {path:"quality-assurance-testing",component:QualityTestingComponent}, 
  {path:"tab2",component:Tab2Component},
  {path:"board/:id",component:TabsComponent},
  {path:"teams/:id",component:TeamsComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
