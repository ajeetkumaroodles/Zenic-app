import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  createdby: string;
  zenicEdition:string;
  type:string;
  status:string;
  joiningDate:string;
  expDate:string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1., name: 'DML Creative Music', weight: '124578990', symbol: 'Kedah', createdby:'Sg Petani', zenicEdition:'School', type:'HQ', status:'Trial', joiningDate:'20-09-2021', expDate:'30-10-2021',  action:'true'},
  {position: 2., name: 'DML Creative Music', weight: '124578990', symbol: 'Kedah', createdby:'Sg Petani', zenicEdition:'School', type:'HQ', status:'Trial', joiningDate:'20-09-2021', expDate:'30-10-2021',  action:'true'},
  {position: 3., name: 'DML Creative Music', weight: '124578990', symbol: 'Kedah', createdby:'Sg Petani', zenicEdition:'School', type:'HQ', status:'Trial', joiningDate:'20-09-2021', expDate:'30-10-2021',  action:'true'},
  {position: 4., name: 'DML Creative Music', weight: '124578990', symbol: 'Kedah', createdby:'Sg Petani', zenicEdition:'School', type:'HQ', status:'Trial', joiningDate:'20-09-2021', expDate:'30-10-2021',  action:'true'},
  {position: 5., name: 'DML Creative Music', weight: '124578990', symbol: 'Kedah', createdby:'Sg Petani', zenicEdition:'School', type:'HQ', status:'Trial', joiningDate:'20-09-2021', expDate:'30-10-2021',  action:'true'},
];

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeResult = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'createdby', 'zenicEdition', 'type', 'status', 'joiningDate', 'expDate', 'action'];
  dataSource = ELEMENT_DATA;

}
