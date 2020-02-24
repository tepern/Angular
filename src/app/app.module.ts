import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './table/cell.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { PopupComponent } from './left-panel/popup.component';
import { PopupService } from './left-panel/popup.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellComponent,
    LeftPanelComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [LeftPanelComponent,PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
