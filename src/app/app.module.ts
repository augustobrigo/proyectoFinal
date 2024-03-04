import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { Form1Component } from './form1/form1/form1.component';
import { Form2Component } from './form2/form2/form2.component';
import { Form3Component } from './form3/form3/form3.component';
import { Form4Component } from './form4/form4/form4.component';
import {MatDividerModule} from '@angular/material/divider'
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { InpOut1Component } from './inp-out1/inp-out1.component';
import { InpOut2Component } from './inp-out2/inp-out2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    InpOut1Component,
    InpOut2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,
    MatInputModule,MatFormFieldModule,MatSelectModule,
    FormsModule,ReactiveFormsModule,
    MatDatepickerModule, MatButtonModule,
    MatNativeDateModule,MatDividerModule, MatTableModule,
    MatCheckboxModule,MatRadioModule

  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
