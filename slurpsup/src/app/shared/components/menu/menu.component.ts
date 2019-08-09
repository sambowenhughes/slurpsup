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
  
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    console.log("Being hit")
    this.fileToUpload = files.item(0);

    this.reviewManagementService.uploadFile(this.fileToUpload);
  }

  uploadFileToActivity() {
    
  }

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
  

  constructor(public reviewManagementService : ReviewManagementService) { }

  ngOnInit() {
  }

  /**
   * Open and close the modal
   */
  toggleModal(){
    this.modalActive = !this.modalActive;
  }

  uploader = document.getElementById('uploader');
  fileButton = document.getElementById('fileButton');


  /**
   * Review juice - then submit juice for review
   */
  onSubmit(){
    var juice : Juice;
    juice = this.reviewForm.value;

    this.toggleModal();
    if(juice.reviewer  != ""){
      this.reviewManagementService.createReview(juice);
      this.reviewForm.reset(); 
    }
  }
}
