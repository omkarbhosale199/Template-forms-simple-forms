import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform1',
  templateUrl: './simpleform1.component.html',
  styleUrls: ['./simpleform1.component.css']
})
export class Simpleform1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){
    console.log("form submitted", formData);
    //direct instance printed & remove required attribute from both input elements in html ( formData/myform etc.)
    }
}
