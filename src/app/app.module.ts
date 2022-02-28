import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainFormComponent } from './main-form/main-form.component';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
