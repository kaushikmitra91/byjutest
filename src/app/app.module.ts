import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GenericService } from './services/generic.service';
import { ChildSubjectPipe } from './pipes/child-subject.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ChildSubjectPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
