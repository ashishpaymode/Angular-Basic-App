import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Angular Template Driven Form";
  desc: string = 'This project demonstrate on angular template driven form.'
  constructor() { }

  ngOnInit(): void {
  }

}
