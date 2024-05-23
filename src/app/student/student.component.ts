import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '../service/notification.service';
import { WorkSheet, utils, WorkBook, writeFile } from 'xlsx';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  private readonly notifier: NotifierService;
  title = 'devOps-skills-student';
  students: Student[] = [];
  studentSize: number = 0;
  imageUrl: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'action'];
  dataSource = new MatTableDataSource<Student>([]);



  constructor(private service: StudentService,
    notifierService: NotifierService,
    private router: Router,
    private notificationService: NotificationService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  getStudents() {
    this.service.getStudents().subscribe(
      (response) => {
        this.students = response;
        this.studentSize = response.length;
        this.notifier.notify('default', 'Students Loaded');
        this.dataSource.data = this.students;
      }, () => {
        this.notifier.notify("error", "An error occure while fetching students !");
      }
    );
  }

  saveStudent(student: Student) {
    this.service.saveStudent(student).subscribe(
      (response) => {
        this.notifier.notify("success", "student created !");
        this.getStudents();
      },
      () => {
        this.notifier.notify("error", "An error occure while saving student !");
      }
    )
  }
  onDelete(id: number) {
    if (confirm("Do You want To Delete")) {
      this.service.deleteStudent(id).subscribe(
        (response) => {
          this.notifier.notify("success", "student Deleted !");
          this.getStudents();
        }, () => {
          this.notifier.notify("warning", "An Error Occured");
        });

    }

  }
  onProfile(studenId: any) {
    this.router.navigate(['/profile', studenId]);

  }

  getStudentImage(imageUrl: string) {
    this.service.getStudentImage(imageUrl)
      .subscribe((response) => {
        this.imageUrl = response.url;
        console.log(this.imageUrl)
      });
  }

  printReport(): void {
    this.notificationService.onDefault('Report downloaded');
     /* generate worksheet */
     const ws: WorkSheet = utils.json_to_sheet(this.students);
     /* generate workbook and add the worksheet */
     const wb: WorkBook = utils.book_new();
     utils.book_append_sheet(wb, ws, 'Sheet1');
     /* save to file */
     writeFile(wb, "studends.xlsx");
    // // window.print();
    // let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
    // let tableSelect = document.getElementById('exceltable');
    // let tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');
    // let downloadLink = document.createElement('a');
    // document.body.appendChild(downloadLink);
    // downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
    // downloadLink.download = 'student-report.xls';
    // downloadLink.click();
    // document.body.removeChild(downloadLink);
  }
}
