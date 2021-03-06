import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LeftPanelComponent } from './left-panel.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

import { FormsModule } from '@angular/forms';


// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [PopupService],
  declarations: [LeftPanelComponent, PopupComponent],
  bootstrap: [LeftPanelComponent],
  entryComponents: [PopupComponent],
})
export class LeftPanelModule {
}