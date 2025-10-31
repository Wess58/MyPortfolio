import { Component, OnInit } from '@angular/core';
// import Aos from 'aos'; //AOS - 1
declare let AOS: any;
import content from "../../jsons/projects.json";
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  keyProjects = content.keyProjects;
  otherProjects = content.otherProjects;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // AOS.init({ disable: 'mobile' });//AOS - 2
  }

  sendEvent(label: string): void {
    this.apiService.sendEvent(label, {
      location: 'Projects section',
      timestamp: new Date().toISOString()
    });
  }

  eventLabelTitleFormat(title: string): string {
    return title.toLowerCase().trim().replace(/\s+/g, "_");
  }
}
