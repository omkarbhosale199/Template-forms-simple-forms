import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform4',
  templateUrl: './simpleform4.component.html',
  styleUrls: ['./simpleform4.component.css']
})
export class Simpleform4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(formData:NgForm){console.log(`form submitted ${formData.value}`);
}
}
