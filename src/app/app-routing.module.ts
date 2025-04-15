
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component/home.component.component';
import { ProjectdetailComponent} from './pages/projectdetail.component/projectdetail.component.component'
import { ContactComponent} from './pages/contact/contact.component'
import { AboutComponent}  from './pages/about/about.component'
import { ProjectComponent } from './pages/project/project.component'
import { EducationComponent } from './pages/education/education.component'
     export const routes: Routes = [
        { path: '',redirectTo:"home" , pathMatch: 'full'},
        { path: 'home',component: HomeComponent,providers: [] },
        { path: 'projectsdetail/:id', component: ProjectdetailComponent },
        { path: 'contact' , component:ContactComponent},
        { path: 'about' , component:AboutComponent},
        { path:'project',component:ProjectComponent},
        { path:'education',component:EducationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
