import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {GameControlComponent} from './game-control/game-control.component';
import {OddListenerComponent} from "./listeners/odd-listner/odd-listener.component";
import {EvenListenerComponent} from "./listeners/even-listner/even-listener.component";

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddListenerComponent,
    EvenListenerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
