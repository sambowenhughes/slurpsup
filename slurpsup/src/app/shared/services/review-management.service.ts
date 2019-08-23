import { Injectable, OnInit } from '@angular/core';
import { Juice } from '../models/Juice';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from '../../../../node_modules/rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '../../../../node_modules/@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators'; 
import { firestore } from '../../../../node_modules/firebase';


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
      

      result.forEach(review => {
        var image = review.imageDownloadUrl;
        if(image !== null){
          var ref = this.firebaseStorage.ref(image.toString())
          var url = ref.getDownloadURL().subscribe(result =>{
            console.log(result)
          review.image = result; 
          });
        }
      });


      this.reviews = result;


      // var first = result[3];
      // var image = first.imageDownloadUrl;
      // var ref = this.firebaseStorage.ref(image.toString())
      // var url = ref.getDownloadURL().subscribe(result =>{
      //   console.log(result)
      // });
      this.juiceSubject.next(this.reviews);
    });
  }

  createReview(juice){
    const filepath = `juices/${Date.now()}_${juice.imageFile.name}`;
    const ref = this.firebaseStorage.ref(filepath);

    this.task = this.firebaseStorage.upload(filepath, juice.imageFile)

    this.task.snapshotChanges().pipe(
      tap(snap => {
        if(snap.bytesTransferred === snap.totalBytes){
          var p = this.firebaseStorage.ref(filepath).getDownloadURL();
        }   
      })
   ).subscribe(result => {
     if(result.metadata != null){
       var savedFilePath = result.metadata.fullPath;
       juice.imageDownloadUrl = savedFilePath;
       juice.imageFile = savedFilePath;
       this.firebaseDb.collection('reviews').add(juice);
     }
   })
  }
}

 

