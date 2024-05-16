import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  studentById: Student | undefined;
  studentId: any;
  fileName: any;
  fileUpload: any;
  id: any;
  diplayImage:any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.id).subscribe(
      (student) => {
        this.studentById = student;
      },
      (error) => { }
    )
    
  }

  onUpdate(arg0: any) {

  }

  goBack(arg0: any) {

  }

  onFileSelected(event, id: number) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);
      this.studentService.uploadStudentImageUrl(formData, id).subscribe(
        () => { }, () => { }
      )
    }
  }
}
