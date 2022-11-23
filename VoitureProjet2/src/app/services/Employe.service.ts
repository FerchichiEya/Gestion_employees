import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  Employe : Employe[]; //un tableau de chînes de caractères
  constructor() {
    console.log("Création du ServiceEmploye !")
    this.Employe = [
      {idEmploye: 1, nom_prenom_Employe:'Mohamed ben salah',adresseEmploye:
      'rue Paris',emailEmploye:'mohamed@gmail.com',passwordEmploye:'****',roleEmploye:'Admin'}
    
     ];
    }
    listeEmployes():Employe[]{
      return this.Employe;
}
ajouterEmploye( V: Employe){
  this.Employe.push(V);
  }


    }

