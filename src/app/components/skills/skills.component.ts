import { Component, OnInit } from '@angular/core';
// import Aos from 'aos';
declare let AOS: any;

import content from "../../jsons/skills.json";
import * as moment from 'moment';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = content.skillsList;
  experiences = content.experiences;

  currentWorkPeriodMonths = moment().diff(moment('2022-08-01'), 'months');
  currentWorkPeriodYears = (this.currentWorkPeriodMonths / 12 | 0) + ' yrs ' + (this.currentWorkPeriodMonths % 12) + ' mo';

  constructor() { }

  ngOnInit(): void {
    // Aos.init({ once: true });
    // Aos.init({ disable: 'phone' });//AOS - 2
    AOS.init();//AOS - 2

  }

}
