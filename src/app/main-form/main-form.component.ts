import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {

  @ViewChild('f') appForm!: NgForm;

  onSubmit(): void {
    console.log(this.appForm);
  }
}
