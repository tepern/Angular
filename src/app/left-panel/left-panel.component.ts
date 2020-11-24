import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'left-panel',
  template: `
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button (click)="popup.showAsElement(input.value)">Show as element</button>
  `,
  /*styleUrls: ['./left-panel.component.scss']*/
})
export class LeftPanelComponent {
   constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
    }
}