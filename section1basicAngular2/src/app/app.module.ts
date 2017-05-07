import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WarningComponent} from './warningalerts/warning.component';
import  {SuccessComponent} from './successalerts/success.component';
import {RegistrationComponent} from './registration/registration.component';
import {ToggleComponent} from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    RegistrationComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
