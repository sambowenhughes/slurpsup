import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public juices: Array<String> = new Array;

  constructor() { }

  ngOnInit() {
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");
    this.juices.push("Hello");



  }

}
