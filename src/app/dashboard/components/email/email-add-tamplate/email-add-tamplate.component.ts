import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-add-tamplate',
  templateUrl: './email-add-tamplate.component.html',
  styleUrls: ['./email-add-tamplate.component.scss']
})
export class EmailAddTamplateComponent implements OnInit {
  formdata:any;

  closeResult = '';

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formdata = this.formBuilder.group({
      description: ['', [Validators.required,
        Validators.maxLength(400), Validators.minLength(5)]]
  });
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
