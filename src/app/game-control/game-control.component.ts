import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  // @Output() tickProduced = new EventEmitter<{ value: number }>();
  @Output() tickProduced = new EventEmitter<number>();

  tickValue: number = 0;
  refTimer = null;

  constructor() {
  }

  onStartGame() {
    let self = this;
    if (this.refTimer === null) {
      this.refTimer = setInterval(function () {
        // self.tickProduced.emit({value: self.tickValue++});
        self.tickProduced.emit(self.tickValue++);
      }, 1000);
    }
  }

  onStopGame() {
    clearInterval(this.refTimer);
    this.refTimer = null;
  }

}
