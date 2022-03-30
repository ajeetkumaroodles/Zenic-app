import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-termcondition',
  templateUrl: './add-termcondition.component.html',
  styleUrls: ['./add-termcondition.component.scss']
})
export class AddTermconditionComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSm(content1: any) {
    this.modalService.open(content1, { size: 'sm' });
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
