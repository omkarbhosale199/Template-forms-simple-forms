import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform2',
  templateUrl: './simpleform2.component.html',
  styleUrls: ['./simpleform2.component.css']
})
export class Simpleform2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData.value}`);
}
}
