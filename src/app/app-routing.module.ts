import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: 'profile/:id',
    component: ProfileComponent,
    title: 'student-profile'
  },
  
  {
    path: 'student',
    component: StudentComponent,
    title: 'student'
  },
  {
    path: '',
    redirectTo: '/student',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
