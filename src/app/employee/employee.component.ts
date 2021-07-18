import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../interfaces/employee';
import { EmployeesServiceService } from '../services/employees-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public formGroup: FormGroup;
  public isInvaled: boolean= false;
  public employees: Employee[]= [];

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeesServiceService) {
    this.formGroup = this.formBuilder.group({
      name: ['Cristian', Validators.required],
      functionEmployee: ['Development', Validators.required]  
    });
   }
  
  ngOnInit(): void {
    
  }
  public addSumbit() {    
    if(this.formGroup.invalid){
      console.log("Formulario Erroneo!");
      this.isInvaled= true;
      return;      
    } 
    this.isInvaled= false;
  
  }
  public Click(){
    this.employeeService.getEmployees().subscribe(data => {

      this.employees = data.information;
      console.log(this.employees);
    },
    err => {
      console.log(err);
    });

   
  }
  

}
