import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd-listener',
  templateUrl: './odd-listener.component.html',
  styleUrls: ['./odd-listener.component.css']
})
export class OddListenerComponent implements OnInit {

  @Input() srcTick: number;

  constructor() { }

  ngOnInit() {
  }

}
