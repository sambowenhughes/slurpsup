import { Component, OnInit } from '@angular/core';
import { Juice } from '../../models/Juice';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public modalActive : boolean = true;


  /**
   * Setup the form modal 
   */
  public reviewForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    taste: new FormControl('', [
      Validators.required
    ]),
    price: new FormControl('', [
      Validators.required
    ]),
    lookAndFeel: new FormControl('', [
      Validators.required
    ]),
    image: new FormControl('',[
      Validators.required
    ])
    ,
    notes: new FormControl('',[
      Validators.required
    ])
    ,
    reviewer: new FormControl('',[
      Validators.required
    ])
  });

  public juice : Juice;
  public rangeValues : number = 40;  

  constructor() { }

  ngOnInit() {
  }

  toggleModal(){
    this.modalActive = !this.modalActive;
  }

  /**
   * Review juice
   */
  onSubmit(){
    var juice : Juice;
    juice = this.reviewForm.value;
    console.log(juice.image)
    // this.closeModal();
  }
}
