import { GroupService } from '../services/invesgroup.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../model/invesgroup';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {

  @Input()
  group: Group;

  @Input()
  index: number;

  constructor(public groupService: GroupService, private router: Router) { }

  ngOnInit(): void {
  }

  updateInstitution(name: string) : void {
    this.groupService.getGroup(name).subscribe( () => {
      this.router.navigateByUrl('/update/'+ name);
    });
  }

}
