import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // oddTicks = [];
  // evenTicks = [];

  //alternatives
  oddTicks: number[] = [];
  evenTicks: number[] = [];

  // onTick(TickData: { value: number }) {
  //   if (TickData.value % 2 == 0) {
  //     this.evenTicks.push(TickData.value);
  //   } else {
  //     this.oddTicks.push(TickData.value);
  //   }
  // }

  onTick(value: number) {
    if (value % 2 === 0) {
      this.evenTicks.push(value);
    } else {
      this.oddTicks.push(value);
    }
  }
}
