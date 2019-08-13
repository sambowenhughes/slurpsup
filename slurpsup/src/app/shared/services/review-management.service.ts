import { Injectable, OnInit } from '@angular/core';
import { Juice } from '../models/Juice';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from '../../../../node_modules/rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '../../../../node_modules/@angular/fire/storage';
import { finalize } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class ReviewManagementService implements OnInit {

  public reviews : Juice[];
  private juiceSubject: Subject<Juice[]> = new Subject<Juice[]>();
  public juices = this.juiceSubject.asObservable();

  constructor(private firebaseDb : AngularFirestore, private firebaseStorage : AngularFireStorage) { }

  task : AngularFireUploadTask;

  ngOnInit(){
    this.updateGuests();
  }

  getAllGuests(){
    return this.firebaseDb.collection('/reviews').valueChanges();
  }

  updateGuests() {
    this.getAllGuests().subscribe((result : Juice[]) => {
      this.reviews = result
      this.juiceSubject.next(this.reviews);
    });
  }

  createReview(juice){
    const filepath = `juices/${Date.now()}_${juice.imageFile.name}`;
    const ref = this.firebaseStorage.ref(filepath);

    this.task = this.firebaseStorage.upload(filepath, juice.imageFile)

    // var percentage = this.task.percentageChanges();
    console.log("Create Review being vall")
    this.task.snapshotChanges().pipe(
    finalize( async() => { 
      console.log("Being called");
      var downloadUrl = await ref.getDownloadURL().toPromise();
      juice.imageDownloadUrl = downloadUrl;
      juice.dateCreated = Date.now();
      this.firebaseDb.collection('reviews').add(juice);
    }));
  }

}

 

