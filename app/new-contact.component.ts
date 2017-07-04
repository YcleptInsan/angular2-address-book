import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'new-contact',
  template: `
  <h2>New Contact</h2>
  <div class='form-group'>
    <label>Enter a name:</label>
    <input #newContactName class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter an address:</label>
    <input #newContactAddress class='form-control'>
  </div>
  <button class='btn' (click)='submitForm(newContactName.value, newContactAddress.value); newContactName.value=""; newContactAddress.value=""'>Add new contact</button>
  `
})

export class NewContactComponent {
  @Output() newContactSender = new EventEmitter();

  submitForm(name: string, address: string) {
    const newContact = new Contact(name, address);
    this.newContactSender.emit(newContact);
  }
}
