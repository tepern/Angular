import { Input, Component,  OnInit } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit, OnChanges {

   @Input() cellItem: any;

   ngOnInit() {

    
  }
}
