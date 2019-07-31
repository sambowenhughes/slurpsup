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
   * Model values for Juice Review object
   */
  public tasteReview : number = 0;  
  public priceReview : number = 0;  
  public lookReview : number = 0;  

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

  /**
   * Juice object that will be sent over to DB
   */
  public juice : Juice;
  

  constructor() { }

  ngOnInit() {
  }

  /**
   * Open and close the modal
   */
  toggleModal(){
    this.modalActive = !this.modalActive;
  }

  /**
   * Review juice - then submit juice for review
   */
  onSubmit(){
    var juice : Juice;
    juice = this.reviewForm.value;
    console.log(juice)
    console.log(JSON.stringify(juice))
    this.toggleModal();
  }
}
