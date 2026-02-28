import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Make-Counter-App';

  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  reset() {
    this.counter = 0;
  }


  // handleCounter(val:string){
  //   if(val=='minus'){
  //     if (this.counter > 0) {
  //     this.counter--;
  //   }
  //   }
  //   else if(val=='plus'){
  //     this.counter++;
  //   }
  //   else{
  //     this.counter=0;
  //   }
  // }


//   type CounterAction = 'plus' | 'minus' | 'reset';

// handleCounter(action: CounterAction) {
//   switch(action) {
//     case 'plus':
//       this.counter++;
//       break;
//     case 'minus':
//       if (this.counter > 0) this.counter--;
//       break;
//     case 'reset':
//       this.counter = 0;
//       break;
//   }
// }

}
