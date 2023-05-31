import { Component, OnInit } from '@angular/core';
// import Aos from 'aos'; //AOS - 1
declare let AOS: any;

import content from "../../jsons/projects.json";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  keyProjects = content.keyProjects;
  otherProjects = content.otherProjects;

  constructor() { }

  ngOnInit(): void {
    AOS.init();//AOS - 2
  }
}
