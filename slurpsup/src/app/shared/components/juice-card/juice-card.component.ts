import { Component, OnInit, Input} from '@angular/core';
import { Juice } from '../../models/Juice';

@Component({
  selector: 'app-juice-card',
  templateUrl: './juice-card.component.html',
  styleUrls: ['./juice-card.component.css']
})
export class JuiceCardComponent implements OnInit {

  @Input() juice: Juice;

  constructor() { }

  ngOnInit() {
  }

}
