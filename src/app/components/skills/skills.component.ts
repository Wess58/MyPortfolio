import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import content from "../../jsons/skills.json";



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = content.skillsList;
  experiences = content.experiences;

  constructor() { }

  ngOnInit(): void {
    // Aos.init({ once: true });
    // Aos.init({ disable: 'phone' });//AOS - 2
    Aos.init();//AOS - 2

  }

}
