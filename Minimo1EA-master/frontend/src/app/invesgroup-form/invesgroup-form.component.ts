import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../services/invesgroup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './invesgroup-form.component.html',
  styleUrls: ['./invesgroup-form.component.css']
})
export class GroupFormComponent implements OnInit {

  groupForm: FormGroup;
  isSubmitted = false;
  invName;
  groupName;
  groupDescription;
  groupURL;
  groupResponsable;

  constructor(public groupService: GroupService ,private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.invName = this.route.snapshot.paramMap.get('name');
    this.groupService.getGroup(this.invName).subscribe( ins => {
      this.groupName = ins.name;
      this.groupDescription = ins.description;
      this.groupURL = ins.url;
      this.groupResponsable = ins.responsable;
    })
    this.groupForm = this.formBuilder.group({
      name: [ this.groupName , [Validators.required, Validators.nullValidator]],
      description: [ this.groupDescription ],
      url: [ this.groupURL ],
      responsable: [ this.groupResponsable , [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.groupForm.controls;
  }

  update(){
    this.isSubmitted = true;
    if(this.groupForm.invalid){
      return;
    }
    const name = this.groupForm.value.name;
    const description = this.groupForm.value.description;
    const url = this.groupForm.value.url;
    const responsable = this.groupForm.value.responsable;
    const group = {"name": name, "description": description, "url": url, "responsable": responsable};
    console.log("INS", group);
    this.groupService.updateGroup(group, this.invName).subscribe(()=>{
      this.router.navigateByUrl('/groups');
    });
  }
}
