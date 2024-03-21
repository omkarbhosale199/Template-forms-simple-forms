import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform6',
  templateUrl: './simpleform6.component.html',
  styleUrls: ['./simpleform6.component.css']
})
export class Simpleform6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData.value}`);
}
}
