import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnCanges{
    items: string[] = ["1","2","3","4","5","6","7","1"];
    dates: Date[] = [];
    daysBefore: Date[] = [];
    ngOnInit() {
        let d = new Date,
        m = d.getMonth(),
        y = d.getFullYear(),
        totalDays = new Date(y, m+1, 0).getDate(),
        firstDay = new Date(y, m, 1).getDay();
        for (let i = 1; i <= firstDay-1; i++) {
            this.daysBefore.push('');
        }
        if(firstDay==0) {
           for (let i = 1; i <= 6; i++) {
            this.daysBefore.push('');
           }
        }
        for (let i = 1; i <= totalDays; i++) {
            this.dates.push(new Date(y, m, i));
        }
       console.log(this.dates); 
       return(this.dates, this.daysBefore);
  }

}
