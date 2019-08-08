import { Injectable, OnInit } from '@angular/core';
import { Juice } from '../models/Juice';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewManagementService implements OnInit {

  public juices: Array<any> = new Array;
  public reviews : Juice[];

  constructor(private AngularFirestore : AngularFirestore) { }

  ngOnInit(){
    console.log("Services being called")
    this.getAllReviews();
  }

  getAllReviews(){


    this.AngularFirestore.collection('/reviews').snapshotChanges()
    .subscribe(snapshots => {
      this.juices = snapshots;
      console.log(this.juices.map)
    })


    var juice1 = new Juice;
    juice1.name = "Innocent";
    juice1.lookAndFeel = 79;
    juice1.notes = "Really nice drink, flavour liked a long time";
    juice1.price = 30;
    juice1.reviewer = "Sam Bowen-Hughes";
    juice1.taste = 16
    juice1.image = "../../../../assets/fruitjuice.jpg"

    var juice2 = new Juice;
    juice2.name = "Coca Cola";
    juice2.lookAndFeel = 38;
    juice2.notes = "Very sweet, lovely look. Not very good for you though";
    juice2.price = 18;
    juice2.reviewer = "Sam Bowen-Hughes";
    juice2.taste = 109
    juice2.image = "../../../../assets/coke.png"

    // this.juices.push(juice1);
    // this.juices.push(juice2);
  }

  createReview(juice : Juice){
    juice.image = "../../../../assets/coke.png"
    this.juices.push(juice);
  }

}
