import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  studentById: Student | undefined;
  studentId: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.route
    this.studentService.getStudents().subscribe(
      (students) => {
        this.studentId = this.route.snapshot.paramMap.get('id');
        for (const student of students) {
          if (student.id ==this.studentId) {
            this.studentById = student;
          }
        }
      },
      (error) => { }
    )
  }

  onUpdate(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
