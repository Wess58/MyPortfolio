import { Component, OnInit } from '@angular/core';
import Aos from 'aos'; //AOS - 1

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();//AOS - 2
  }
}
