import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  createdby: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1., name: 'Music', weight: 'Mid Term Exams', symbol: '20-11-2021, 12:00 AM', createdby:'Super Admin', action:'true'},
  {position: 2., name: 'Music', weight: 'Mid Term Exams', symbol: '20-11-2021, 12:00 AM', createdby:'Super Admin', action:'true'},
  {position: 3., name: 'Music', weight: 'Mid Term Exams', symbol: '20-11-2021, 12:00 AM', createdby:'Super Admin', action:'true'},
  {position: 4., name: 'Music', weight: 'Mid Term Exams', symbol: '20-11-2021, 12:00 AM', createdby:'Super Admin', action:'true'}
];

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  closeResult = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'createdby', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSm(content1: any) {
    this.modalService.open(content1, { size: 'sm' });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
