import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // Aos.init();//AOS - 2
    }, 2000);
  }

}
