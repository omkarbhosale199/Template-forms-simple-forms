import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform5',
  templateUrl: './simpleform5.component.html',
  styleUrls: ['./simpleform5.component.css']
})
export class Simpleform5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData.value}`);
}
}
