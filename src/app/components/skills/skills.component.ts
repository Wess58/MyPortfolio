import { Component, OnInit } from '@angular/core';
import Aos from 'aos';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  tab: string = 'languages';

  constructor() { }

  ngOnInit(): void {
    // Aos.init({ once: true });
    // Aos.init({ disable: 'phone' });//AOS - 2
    Aos.init();//AOS - 2

    // Aos.init();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }


  changedTab(tab: any): void {
    console.log(tab);
    this.tab = tab;

    Aos.init();//AOS - 2
    // Aos.init();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.

  }

}
