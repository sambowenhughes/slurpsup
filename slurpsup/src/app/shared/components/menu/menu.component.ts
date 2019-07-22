import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public modalActive : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleModal(){
    this.modalActive = !this.modalActive;
  }
}
