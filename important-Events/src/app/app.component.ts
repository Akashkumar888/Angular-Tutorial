import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'important-Events';


  handleEvents(event: Event) {

    console.log("Event Type:", event.type);

    const target = event.target as HTMLElement;

    if (target) {
      console.log("Element:", target.tagName);
      console.log("Class:", target.className);
    }

    // Keyboard event
    if (event instanceof KeyboardEvent) {
      console.log("Key Pressed:", event.key);
    }

    // Mouse event
    if (event instanceof MouseEvent) {
      console.log("Mouse X:", event.clientX);
      console.log("Mouse Y:", event.clientY);
    }

    // Input event
    if (target instanceof HTMLInputElement) {
      console.log("Input Value:", target.value);
    }

  }


}


