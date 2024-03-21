import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform7',
  templateUrl: './simpleform7.component.html',
  styleUrls: ['./simpleform7.component.css']
})
export class Simpleform7Component implements OnInit {

defaultCourse:string="Angular"
// to set default Course we use this variable

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData}`);
}
}
