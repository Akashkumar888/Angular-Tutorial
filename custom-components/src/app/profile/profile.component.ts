
import { Component } from "@angular/core";

// @Component({
//   selector:'app-profile',
//   template:`<h1>Profile Components</h1>`,
//   styles:`h1{
//   color:orange
//   }`
// })


@Component({
  selector:'app-profile',
  standalone: true,   // 👈 ADD THIS Without it, Angular does NOT treat it as a valid importable component.That’s why it says: imports must be array of components…
  templateUrl:'./profile.component.html',
  styleUrl:'./profile.component.css',
})


export class ProfileComponent{

}

