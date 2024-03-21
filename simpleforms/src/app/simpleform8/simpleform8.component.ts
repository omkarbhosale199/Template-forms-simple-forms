import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform8',
  templateUrl: './simpleform8.component.html',
  styleUrls: ['./simpleform8.component.css']
})
export class Simpleform8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData}`);
}
}
