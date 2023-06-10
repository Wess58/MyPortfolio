import { Component, OnInit } from '@angular/core';
// import Aos from 'aos';
declare let AOS: any;
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    AOS.init();//AOS - 2
    this.resfreshPage();
  }

  resfreshPage(): void {
    console.log(localStorage.getItem('reload') || '');

    if (localStorage.getItem('reload') !== 'true') {
      localStorage.setItem('reload', 'true');
      location.reload();
      AOS.init();//AOS - 2
    }

    setTimeout(() => {
      localStorage.removeItem('reload');
    }, 60000);
  }

}
