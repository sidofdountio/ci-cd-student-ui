import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  private readonly notifier: NotifierService;
  title = 'devOps-skills-student';
  students: Student[] = [];
  studentSize: number = 0;
 

  constructor(private service: StudentService,
    notifierService: NotifierService,
    private router:Router) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.service.getStudents().subscribe(
      (response) => {
        this.students = response;
        this.studentSize = response.length;
        this.notifier.notify('default','Students Loaded');
      }, () => {
        this.notifier.notify("error","An error occure while fetching students !");
      }
    );
  }

  saveStudent(student: Student) {
    this.service.saveStudents(student).subscribe(
      (response) => {
        this.notifier.notify("success","student created !");
        this.getStudents();
      },
      () => {
        this.notifier.notify("error", "An error occure while saving student !");
      }
    )
  }
  onDelete(id: number) {
    this.notifier.notify("warning","This feature it's not yet available");
  }
  onProfile(studenId:any){
    this.router.navigate(['/profile' ,studenId]);
    
  }
}
