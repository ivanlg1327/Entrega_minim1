import { InstitutionService } from './../services/institution.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Institution } from '../model/institution';

@Component({
  selector: 'app-institution-card',
  templateUrl: './institution-card.component.html',
  styleUrls: ['./institution-card.component.css']
})
export class InstitutionCardComponent implements OnInit {

  @Input()
  institution: Institution;

  @Input()
  index: number;

  constructor(public institutionService: InstitutionService, private router: Router) { }

  ngOnInit(): void {
  }

  updateInstitution(name: string) : void {
    this.institutionService.getInstitution(name).subscribe( () => {
      this.router.navigateByUrl('/update/'+ name);
    });
  }

}
