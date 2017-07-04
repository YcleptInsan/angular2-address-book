import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'contact-list',
  template: `
  <ul>
    <li *ngFor="let currentContact of childContactList">
      {{currentContact.name}}, {{currentContact.address}}
      <button (click)="editButtonHasBeenClicked(currentContact)" class='btn btn-xs'>Edit!</button>
    </li>
  </ul>
  `
})

export class ContactListComponent {
  @Input() childContactList: Contact[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(clickedContact: Contact) {
    this.clickSender.emit(clickedContact);
  }
}
