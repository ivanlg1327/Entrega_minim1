import { Group } from '../model/invesgroup';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroups(){
    return this.http.get<Group[]>(environment.apiURL + '/groups/all');
  }

  getGroup(name: String){
    return this.http.get<Group>(environment.apiURL + '/groups/' + name);
  }

  updateGroup(group: any, name: string){
    return this.http.post(environment.apiURL + '/groups/update/' + name, group);
  }
}
