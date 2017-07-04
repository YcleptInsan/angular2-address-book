import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'edit-contact',
  template: `
  <div>
    <div *ngIf='childSelectedContact'>
    <h3> {{childSelectedContact.name}}</h3>
    <h3> {{childSelectedContact.address}}</h3>
    <h3> Edit Contact </h3>
    <label> Name </label>
    <input [(ngModel)]="childSelectedContact.name">
    <label> Address </label>
    <input [(ngModel)]="childSelectedContact.address">
    <button (click)='doneButtonClicked()' class='btn'> Save Changes</button>
  </div>
  `
})

export class EditContactComponent {
  @Input() childSelectedContact: Contact;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
