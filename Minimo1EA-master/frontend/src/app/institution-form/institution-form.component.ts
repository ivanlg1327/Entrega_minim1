import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionService } from './../services/institution.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-institution-form',
  templateUrl: './institution-form.component.html',
  styleUrls: ['./institution-form.component.css']
})
export class InstitutionFormComponent implements OnInit {

  institutionForm: FormGroup;
  isSubmitted = false;
  insName;
  institutionName;
  institutionDescription;
  institutionURL;
  institutionResponsable;

  constructor(public institutionService: InstitutionService ,private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.insName = this.route.snapshot.paramMap.get('name');
    this.institutionService.getInstitution(this.insName).subscribe( ins => {
      this.institutionName = ins.name;
      this.institutionDescription = ins.description;
      this.institutionURL = ins.url;
      this.institutionResponsable = ins.responsable;
    })
    this.institutionForm = this.formBuilder.group({
      name: [ this.institutionName , [Validators.required, Validators.nullValidator]],
      description: [ this.institutionDescription ],
      url: [ this.institutionURL ],
      responsable: [ this.institutionResponsable , [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.institutionForm.controls;
  }

  update(){
    this.isSubmitted = true;
    if(this.institutionForm.invalid){
      return;
    }
    const name = this.institutionForm.value.name;
    const description = this.institutionForm.value.description;
    const url = this.institutionForm.value.url;
    const responsable = this.institutionForm.value.responsable;
    const institution = {"name": name, "description": description, "url": url, "responsable": responsable};
    console.log("INS", institution);
    this.institutionService.updateInstitution(institution, this.insName).subscribe(()=>{
      this.router.navigateByUrl('/institution');
    });
  }
}
