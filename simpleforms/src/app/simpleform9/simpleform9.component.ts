import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform9',
  templateUrl: './simpleform9.component.html',
  styleUrls: ['./simpleform9.component.css']
})
export class Simpleform9Component implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData}`);
}
}
