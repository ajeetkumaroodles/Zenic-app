import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {
  testForm = new FormGroup({
    food: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });
  ngOnInit() {}

  goNext(progress: ProgressComponent) {
    progress.next();
  }

  onStateChange(event: any) {
    // console.log(event);
  }

  ngAfterViewInit() {}

  
  }