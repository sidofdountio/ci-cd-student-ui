import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';
import { StudentService } from './service/student.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "devOps-skills-student";

  constructor(private service: StudentService,
    private router: Router) {

  }
  ngOnInit(): void {
    
  }

  goToStudent() {
    this.router.navigate(['/student'])
  }

}
