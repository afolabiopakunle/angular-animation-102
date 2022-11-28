import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('divState', [
      state('start', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('end', style({
        backgroundColor: 'green',
        transform: 'translateX(140px)'
      })),
      transition('start <=> end', animate(500))
    ])
  ]
})
export class AppComponent  {

  state = 'start'
  list = ["Milk", "Chocolate", "Sugar"]

  onAnimate() {
    this.state === 'start' ? this.state = 'end' : this.state = 'start'
  }

  onShrink() {}

  onAdd() {}

  onDelete() {}
  
}
