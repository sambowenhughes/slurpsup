import { Component, OnInit } from '@angular/core';
import { Juice } from '../../models/Juice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReviewManagementService } from '../../services/review-management.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public modalActive : boolean = false;

  /**
   * Model values for Juice Review object
   */
  public tasteReview : number = 0;  
  public priceReview : number = 0;  
  public lookReview : number = 0; 

  public imageName = "Please upload an image"

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
    ]),
    notes: new FormControl('',[
      Validators.required
    ]),
    reviewer: new FormControl('',[
      Validators.required
    ])
  });

  /**
   * Juice object that will be sent over to DB
   */
  public juice : Juice;
  public imageOfJuice : File
  

  constructor(public reviewManagementService : ReviewManagementService) { }

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
    juice.imageFile = this.imageOfJuice;

    // TODO : tidy up this logic check
    if(juice.reviewer  != ""){
      this.reviewManagementService.createReview(juice);
      this.reviewForm.reset(); 
      this.toggleModal();
    }
  }

  /**
   * Start uploading the file to remove downtime
   * regardless if the 
   * @param files 
   */
  handleFileInput(files: FileList) {
    this.imageName = files.item(0).name
    this.imageOfJuice =  files.item(0);
  }
}
