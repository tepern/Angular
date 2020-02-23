import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
    items: string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    dates: Date[] = [];
    daysBefore: string[] = [];
    month: Date;
    ngOnInit() {
        let d = new Date,
        m = d.getMonth(),
        y = d.getFullYear();
        
       this.generateDatesBefore(m, y); 
       this.generateDates(m, y);
       console.log(this.dates);
       console.log(m);
       console.log(y);
       this.month = this.dates[0];
       console.log(this.month);
       return(this.dates, this.daysBefore, this.month);
  }

    generateDates (m: number, y: number) {
      let  totalDays = new Date(y, m+1, 0).getDate();
      for (let i = 1; i <= totalDays; i++) {
          this.dates.push(new Date(y, m, i));
      }
    }

    generateDatesBefore (m: number, y: number) {
      let firstDay = new Date(y, m, 1).getDay();
     for (let i = 1; i <= firstDay-1; i++) {
          this.daysBefore.push('');
      }
      
      if(firstDay==0) {
         for (let i = 1; i <= 6; i++) {
          this.daysBefore.push('');
         }
      }
    }

    nextMonth (m: number, y: number) {
      this.dates = [];
      this.daysBefore = [];
      this.generateDatesBefore(m, y); 
      this.generateDates(m, y);
      this.month = this.dates[0];
    }

}
