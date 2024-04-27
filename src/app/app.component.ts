import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'devops-skills-ui';
  students: Student[] = [];
  studentSize: number = 0;
 

  constructor(private service: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.service.getStudents().subscribe(
      (response) => {
        this.students = response;
        this.studentSize = response.length;
        // this.notifier.openSnackBarSuccess('Students Loaded', 'X');
      }, () => {
        // this.notifier.openSnackBarError("An error occure while fetching students !", "x");
      }
    );
  }

  saveStudent(student: Student) {
    this.service.saveStudents(student).subscribe(
      (response) => {
        // this.notifier.openSnackBarSuccess("student created !", "x");

        this.getStudents();
      },
      () => {
        // this.notifier.notify(NotificationType.ERROR, "An error occure while saving student !");
      }
    )
  }
  onDelete(id: number) {
    // this.notifier.openSnackBarError("This feature it's not yet available", "x");
  }
}
