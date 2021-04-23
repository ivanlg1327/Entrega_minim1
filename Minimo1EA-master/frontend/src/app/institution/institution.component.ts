import { Router } from 'express';
import { InstitutionService } from './../services/institution.service';
import { Component, OnInit } from '@angular/core';
import { Institution } from '../model/institution';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  institutions: Institution[];

  constructor(public institutionService: InstitutionService, /* private router: Router */) { }

  ngOnInit(): void {
    this.institutionService.getInstitutions().subscribe( institutions => {
      this.institutions = institutions;
      console.log("EO: " + institutions.toString());
    });
  }

}
