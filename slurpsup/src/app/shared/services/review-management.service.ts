import { Injectable, OnInit } from '@angular/core';
import { Juice } from '../models/Juice';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewManagementService implements OnInit {

  // public juices: Array<any> = new Array;
  public reviews : Juice[];

  private juiceSubject: Subject<Juice[]> = new Subject<Juice[]>();
  public juices = this.juiceSubject.asObservable();

  constructor(private AngularFirestore : AngularFirestore) { }

  ngOnInit(){
    this.updateGuests();
  }

  getAllGuests(){
    return this.AngularFirestore.collection('/reviews').valueChanges();
  }

  createReview(juice : Juice){
    juice.image = "../../../../assets/coke.png"
    // Write to DB
  }


  updateGuests() {
    this.getAllGuests().subscribe((result : Juice[]) => {
      this.reviews = result
      this.juiceSubject.next(this.reviews);
    });
  }

}

 

