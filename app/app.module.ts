import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list.component';
import { EditContactComponent } from './edit-contact.component';
import { NewContactComponent } from './new-contact.component';

@NgModule({
  imports:[ BrowserModule,
            FormsModule
          ],
  declarations: [ AppComponent,
                  ContactListComponent,
                  EditContactComponent,
                  NewContactComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
