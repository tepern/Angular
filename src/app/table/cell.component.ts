import { Input, Component,  OnInit } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

   @Input() cellItem: any;

   ngOnInit() {

    
  }
}
