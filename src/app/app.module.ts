import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './table/cell.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { PopupComponent } from './left-panel/popup.component';
import { PopupService } from './left-panel/popup.service';
import { FormsModule } from '@angular/forms';
import { DayComponent }   from './day/day.component';
import { HomeComponent }   from './home.component';

import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'day', component: DayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CellComponent,
    LeftPanelComponent,
    PopupComponent,
    DayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LeftPanelComponent,PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
