import { Component, OnInit } from '@angular/core';
import { Juice } from '../../shared/models/Juice';
import { ReviewManagementService } from '../../shared/services/review-management.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public juices: Array<Juice>;
  public filter: string = "";
  public subscription: Subscription ;

  constructor(private reviewManagmentService : ReviewManagementService) { }

  ngOnInit() {
   this.reviewManagmentService.updateGuests();

   this.subscription = this.reviewManagmentService.juices.subscribe((juices) => {
    this.juices = juices;
  });
  }

}
