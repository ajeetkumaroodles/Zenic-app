import { Component, OnInit } from '@angular/core';

interface Country {
  InvoiceId: string;
  InvoiceRaisedOn: string;
  DueDate: string;
  PaidOn: string;
  TransID: string;
  Amount: string;
  Status: string;
  Edition: string;
  PaymentMethod: string;

}

const COUNTRIES: Country[] = [
  {
    InvoiceId:'#34590398484',
    InvoiceRaisedOn: '30-09-2021',
    DueDate:'30-09-2021',
    PaidOn:'30-09-2021',
    TransID:'#4789494059',
    Amount :'$200',
    Status:'PAID',
    Edition:'School',
    PaymentMethod: ''
  },
  {
    InvoiceId:'#34590398484',
    InvoiceRaisedOn: '30-09-2021',
    DueDate:'30-09-2021',
    PaidOn:'30-09-2021',
    TransID:'#4789494059',
    Amount :'$200',
    Status:'PAID',
    Edition:'School',
    PaymentMethod: ''
  },
  {
    InvoiceId:'#34590398484',
    InvoiceRaisedOn: '30-09-2021',
    DueDate:'30-09-2021',
    PaidOn:'30-09-2021',
    TransID:'#4789494059',
    Amount :'$200',
    Status:'PAID',
    Edition:'School',
    PaymentMethod: ''
  } 
];

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {

  countries = COUNTRIES;

  constructor() { }

  ngOnInit(): void {
  }

}
