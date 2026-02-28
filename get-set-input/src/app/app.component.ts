import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'get-set-input';

  name="";
  displayName="";
  email="";
  displayEmail="";

  getName(event:Event){
    const name=(event.target as HTMLInputElement).value;
    console.log(name);
  
    this.name=name;
  }

  showName(){
    this.displayName=this.name;
  }

  setName(){
    this.name="Sam Karan"
  }

  getEmail(val:string){
    console.log(val);
    this.displayEmail=val;
  }

  setEmail(){
    this.email="test@test123gmail.com";
  }
}
