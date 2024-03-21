import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform3',
  templateUrl: './simpleform3.component.html',
  styleUrls: ['./simpleform3.component.css']
})
export class Simpleform3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData.value}`);
}
}
