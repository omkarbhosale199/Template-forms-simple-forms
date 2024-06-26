import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Simpleform1Component } from './simpleform1/simpleform1.component';
import { Simpleform2Component } from './simpleform2/simpleform2.component';
import { Simpleform3Component } from './simpleform3/simpleform3.component';
import { Simpleform4Component } from './simpleform4/simpleform4.component';
import { Simpleform5Component } from './simpleform5/simpleform5.component';
import { Simpleform6Component } from './simpleform6/simpleform6.component';
import { Simpleform7Component } from './simpleform7/simpleform7.component';
import { Simpleform8Component } from './simpleform8/simpleform8.component';
import { Simpleform9Component } from './simpleform9/simpleform9.component';
import { Simpleform10Component } from './simpleform10/simpleform10.component';
import { Simpleform11Component } from './simpleform11/simpleform11.component';

@NgModule({
  declarations: [
    AppComponent,
    Simpleform1Component,
    Simpleform2Component,
    Simpleform3Component,
    Simpleform4Component,
    Simpleform5Component,
    Simpleform6Component,
    Simpleform7Component,
    Simpleform8Component,
    Simpleform9Component,
    Simpleform10Component,
    Simpleform11Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
