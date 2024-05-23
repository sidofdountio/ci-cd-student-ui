import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { NotifierService } from 'angular-notifier';

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
  diplayImage: any;
  private readonly notifier: NotifierService;

  constructor(private route: ActivatedRoute, 
    private studentService: StudentService, 
    notifierService: NotifierService, 
    private router:Router) {
    this.notifier = notifierService;
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

  onUpdate(studentToUpdate: Student) {
    
    console.log(studentToUpdate)
    this.studentService.editStudent(studentToUpdate).subscribe(
      (response) => {
        this.notifier.notify("success", "student edited !");
      },
      () => {
        this.notifier.notify("error", "An error occure while editing student !");
      }
    )

  }

  goBack() {
    this.router.navigate(['/student'])
  }

  onFileSelected(event, id: number) {
    const formData = new FormData();
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = ()=>{
      this.diplayImage = reader.result;
    }
    reader.readAsDataURL(file);

    if (file) {
      this.fileName = file.name;
      formData.append("file", file);
    }
    this.studentService.uploadStudentImageUrl(formData, id).subscribe(
      () => {
        this.notifier.notify("success", "File uploaded!");
      }, () => { }
    )
  }
}
