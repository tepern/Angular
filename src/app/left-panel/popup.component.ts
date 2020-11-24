import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


export class Event{
  constructor(
    public eventDate: Date,
    public eventTime: Date,
    public eventName: String,
    public eventDescription: String
  ) { }
}

@Component({
  selector: 'my-popup',
  templateUrl: './popup.component.html',
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(50%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  get message(): string { return this._message; }
  _message: string;

  @Output()
  closed = new EventEmitter();
  
  event: Event = new Event(new Date,new Date,"","");

  addEvent() {
    this.event = new Event(this.event.eventDate,this.event.eventTime,this.event.eventName, this.event.eventDescription);
    console.log(this.event);
    let eventKey = this.event.eventDate + "_" + this.event.eventTime;
    let eventValue = this.event.eventName + "_" + this.event.eventDescription;
    localStorage.setItem(eventKey,eventValue);
  }
}