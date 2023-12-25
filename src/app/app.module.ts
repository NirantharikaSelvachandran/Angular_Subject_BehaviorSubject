import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertTaskComponent } from './insert-task/insert-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { FormsModule } from '@angular/forms';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertTaskComponent,
    ShowTaskComponent,
    BehaviourSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
