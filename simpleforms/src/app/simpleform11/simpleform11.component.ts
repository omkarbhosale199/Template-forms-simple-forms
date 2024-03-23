import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-simpleform11',
  templateUrl: './simpleform11.component.html',
  styleUrls: ['./simpleform11.component.css']
})
export class Simpleform11Component implements OnInit {

  defaultCourse:string="SQL"
  // to set default Course we use this variable

 arrayOfCourses=["Angular","JavaScript","CSS","HTML5","SQL"]

// arrayOfCourses=["Angular,JavaScript,CSS,HTML5,SQL"]------------ Wrong
defaultGender:string="Female"
ArrayOfGenders=[
  {id:1,
  value:"male"
},
{id:2,
value:"Female"},
{
  id:3,
  value:"Other"
}
];

//create instance of employee;
ysuvEmployee:Employee = new Employee();
isSubmitted:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(myform:NgForm){
    this.isSubmitted=true;
    console.log(`form submitted ${myform}`);

  this.ysuvEmployee.username = myform.value.usersDetails.username;
  this.ysuvEmployee.email=myform.value.usersDetails.email;
  this.ysuvEmployee.course=myform.value.otherInfo.course;
  this.ysuvEmployee.gender=myform.value.otherInfo.gender;
}
onReset(myform:NgForm){
myform.reset();
this.isSubmitted=false;

// this.defaultCourse = "SQL";
// this.defaultGender = "Female";
// or
myform.controls["course"].setValue("SQL");
myform.controls["gender"].setValue("Female")
// html file madhdhe input madhdhe name="......" je abel te controls ["......"] madhdhe pahijech. controls la array gene IMP ahe
}

}
