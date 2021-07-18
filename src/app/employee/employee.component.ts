import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['Cristian', Validators.required],
      functionEmployee: ['Development', Validators.required]  
    });
   }
  
  ngOnInit(): void {
    
  }
  public addSumbit(form:){

  }
  

}
