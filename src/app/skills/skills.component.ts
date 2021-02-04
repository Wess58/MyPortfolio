import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';




@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],


})
export class SkillsComponent implements OnInit {

  constructor() { }

  tab: string = 'languages';

  ngOnInit() {
  }


  changedTab(tab): void {
    console.log(tab);
    this.tab = tab;

    AOS.init();

  }

}
