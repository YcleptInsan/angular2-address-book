import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>AddressBook</h1>
    <contact-list [childContactList]='masterContactList' (clickSender)='editContact($event)'></contact-list>
    <edit-contact [childSelectedContact]='selectedContact' (doneButtonClickedSender)='finishedEditing()'></edit-contact>
  </div>
  `
})

export class AppComponent {
  selectedContact = null;

  masterContactList: Contact[] = [
    new Contact("nick wise", "110 N Broadway"),
    new Contact("Joshua Fairchild", "123 1st st."),
    new Contact("Child Childress", "444 going way")
  ];

  editContact(clickedContact: Contact) {
    console.log(this.selectedContact);
    this.selectedContact = clickedContact;
    console.log(this.selectedContact);
  }

  finishedEditing() {
    this.selectedContact = null;
  }
}
