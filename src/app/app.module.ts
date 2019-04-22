import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentsdataService } from './services/studentsdata.service';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { StudentFilterPipe } from './student-filter.pipe';
import { CategoryFilterPipe } from './category-filter.pipe';


const appRoutes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'students', component: StudentDashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'onboardingForm', component: OnboardingFormComponent
  },
  {
    path: 'homepage', component: StudentDashboardComponent 
  },
  {
    path: 'delete/:id', component : DeleteComponent
  },
  {
    path: 'view/:id', component : ViewComponent
  },
  {
    path: 'edit/:id', component : EditComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashboardComponent,
    OnboardingFormComponent,
    DeleteComponent,
    ViewComponent,
    EditComponent,
    StudentFilterPipe,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
