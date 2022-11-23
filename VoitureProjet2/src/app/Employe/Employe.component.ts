import { Component, OnInit } from '@angular/core';
import { Employe } from '../model/employe.model';
import { EmployeService } from '../services/Employe.service';

@Component({
  selector: 'app-Employe',
  templateUrl: './Employe.component.html',
  styleUrls: ['./Employe.component.css']
})
export class EmployeComponent implements OnInit {
  Employe? : Employe[]; //un tableau de chînes de caractères
  constructor(private EmployeService : EmployeService) {
   // this.Employe=[];
  }

  ngOnInit(): void {
    // this.Employe =this.EmployeService.listeEmploye();

  }
  addEmploye(){

  }

}
