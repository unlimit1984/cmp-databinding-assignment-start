import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even-listener',
  templateUrl: './even-listener.component.html',
  styleUrls: ['./even-listener.component.css']
})
export class EvenListenerComponent implements OnInit {

  @Input() srcTick: number;

  constructor() { }

  ngOnInit() {
  }

}
