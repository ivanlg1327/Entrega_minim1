import { Institution } from './../model/institution';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  getInstitutions(){
    return this.http.get<Institution[]>(environment.apiURL + '/institution/all');
  }

  getInstitution(name: String){
    return this.http.get<Institution>(environment.apiURL + '/institution/' + name);
  }

  updateInstitution(institution: any, name: string){
    return this.http.post(environment.apiURL + '/institution/update/' + name, institution);
  }
}
