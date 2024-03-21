import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Simpleform1Component } from './simpleform1/simpleform1.component';
import { Simpleform2Component } from './simpleform2/simpleform2.component';
import { Simpleform3Component } from './simpleform3/simpleform3.component';
import { Simpleform4Component } from './simpleform4/simpleform4.component';

@NgModule({
  declarations: [
    AppComponent,
    Simpleform1Component,
    Simpleform2Component,
    Simpleform3Component,
    Simpleform4Component,
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