import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home.component/home.component.component';
import { ProjectdetailComponent } from './pages/projectdetail.component/projectdetail.component.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { EducationComponent } from './pages/education/education.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectdetailComponent,
    ContactComponent,
    AboutComponent,
    ProjectComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     CommonModule,
       FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
