import { Component, OnInit } from '@angular/core';
import { Employe } from "../model/employe.model";
import { EmployeService } from '../services/Employe.service';

@Component({
  selector: 'app-add-Employe',
  templateUrl: './add-Employe.component.html',
  styleUrls: ['./add-Employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  
  newEmployee = new Employe();
  


  constructor(private EmployeService : EmployeService) { }

  ngOnInit(): void {
  }
  addEmploye(){
    //console.log(this.newEmploye);
    this.EmployeService.ajouterEmploye(this.newEmployee);

    
  }
    

}
