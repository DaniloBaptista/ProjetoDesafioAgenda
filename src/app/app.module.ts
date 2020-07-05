import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { AgendaComponentComponent } from './agenda-component/agenda-component.component';
@NgModule({
  declarations: [
    AppComponent,
    AgendaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
