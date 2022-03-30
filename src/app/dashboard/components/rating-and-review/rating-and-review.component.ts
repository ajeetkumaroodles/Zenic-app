import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  createdby: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1., name: 'School Feedback Form', weight: 'School', symbol: '20-11-2021, 12:00 AM', createdby:'Super Admin', action:'true'},
  {position: 2., name: 'School Feedback Form', weight: 'School', symbol: '20-11-2021, 12:00 AM', createdby:'Super Admin', action:'true'},
  {position: 3., name: 'School Feedback Form', weight: 'School', symbol: '20-11-2021, 12:00 AM', createdby:'Super Admin', action:'true'}
];

@Component({
  selector: 'app-rating-and-review',
  templateUrl: './rating-and-review.component.html',
  styleUrls: ['./rating-and-review.component.scss']
})
export class RatingAndReviewComponent implements OnInit {
  closeResult = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'createdby', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}