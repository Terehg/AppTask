import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { PersonFormComponentComponent } from './person-form-component/person-form-component.component';
import { SkillFormComponentComponent } from './skill-form-component/skill-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    PersonFormComponentComponent,
    SkillFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
