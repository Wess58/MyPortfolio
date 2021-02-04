import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  position = ['above'];
  hideDelay = 3000;

  year:any = new Date().getFullYear();


  constructor() { }

  ngOnInit() {
  }

}
