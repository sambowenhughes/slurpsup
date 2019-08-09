import { Injectable, OnInit } from '@angular/core';
import { Juice } from '../models/Juice';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from '../../../../node_modules/rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '../../../../node_modules/@angular/fire/storage';
import { tap, finalize } from 'rxjs/operators'; 
import { TagPlaceholder } from '../../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { async } from '../../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ReviewManagementService implements OnInit {

  // public juices: Array<any> = new Array;
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

  createReview(juice : Juice){
    juice.image = "../../../../assets/coke.png"
    this.firebaseDb.collection('reviews').add(juice);
  }


  updateGuests() {
    this.getAllGuests().subscribe((result : Juice[]) => {
      this.reviews = result
      this.juiceSubject.next(this.reviews);
    });
  }

  uploadFile(fileToUpload){
    
    const filepath = `juices/${Date.now()}_${fileToUpload.name}`;
    const ref = this.firebaseStorage.ref(filepath);

    this.task = this.firebaseStorage.upload(filepath, fileToUpload)

    var percentage = this.task.percentageChanges();
    var snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize( async() => {
        var downloadUrl = await ref.getDownloadURL().toPromise();
        this.firebaseDb.collection('files').add({
          downloadUrl: downloadUrl, filepath 
        })
      })
    );
  }

}

 

