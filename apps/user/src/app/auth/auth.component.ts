import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-avail-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit(): void {
  }

}
