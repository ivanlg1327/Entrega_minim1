import { Router } from 'express';
import { GroupService } from '../services/invesgroup.service';
import { Component, OnInit } from '@angular/core';
import { Group } from '../model/invesgroup';

@Component({
  selector: 'app-group',
  templateUrl: './invesgroup.component.html',
  styleUrls: ['./invesgroup.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[];

  constructor(public GroupService: GroupService, /* private router: Router */) { }

  ngOnInit(): void {
    this.GroupService.getGroups().subscribe( groups => {
      this.groups = groups;
      console.log("EO: " + groups.toString());
    });
  }

}
