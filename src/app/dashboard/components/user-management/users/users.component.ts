import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
interface Country {
  Programme:string;
  Category:string;
  Course:string;
  Pathway:string;
  LessonNote:string;
  ClassFormat:string;
  Fee:string;
  Duration:string;
  CreatedOn:string;
  Actions:string;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    Programme:'Music',
    Category:'Strings',
    Course:'Cello',
    Pathway:'Graded',
    LessonNote:'Notes',
    ClassFormat:'Group',
    Fee:'$100',
    Duration:'30 min',
    CreatedOn:'17-09-2021',
    Actions:'',
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    Programme:'Music',
    Category:'Strings',
    Course:'Cello',
    Pathway:'Graded',
    LessonNote:'Notes',
    ClassFormat:'Group',
    Fee:'$100',
    Duration:'30 min',
    CreatedOn:'17-09-2021',
    Actions:'',
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    Programme:'Music',
    Category:'Strings',
    Course:'Cello',
    Pathway:'Graded',
    LessonNote:'Notes',
    ClassFormat:'Group',
    Fee:'$100',
    Duration:'30 min',
    CreatedOn:'17-09-2021',
    Actions:'',
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
 
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  closeResult = '';
  countries = COUNTRIES;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSm(content1: any) {
    this.modalService.open(content1, { size: 'sm' });
  }

  open(content:any) {
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
