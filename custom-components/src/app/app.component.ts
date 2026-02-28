import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,SignupComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: './app.component.css'
})
export class AppComponent {
  title = 'custom-components';


  // let name:string="Anil Sidhu"; error because of properties like let const var not use 

  name:string="Anil Sidhu";
 data:string|number="Hello";
 other:any=true;

  updateName(){
    // this.name=20;// this give me error
    let x=30;
    this.name="Peter";
    this.data=24;
    this.other="anil";

    this.other=30;
  }



  updateVar(){
    let x=30;
    console.log(x);
  }

  sum(a:number,b:number){
  console.log(a+b);
  }

  // there is no need of function keyword for defining functions
  handleClickEvent(){
    console.log("Function called")
    this.otherFunction(); 
  }

  otherFunction(){
    console.log("Other Function Called")
  }


}

// Parent Component
//    ↓
// Imports Child Components
//    ↓
// Allows using their selectors in HTML

// ⚠️ styleUrl vs styleUrls
// Correct property is:
// styleUrls: ['./app.component.css']
// It should be plural.

// 📌 Now Inside Your Class
// export class AppComponent {
// This is just a normal TypeScript class.
// 🔹 Why You Cannot Use let, var, const Inside Class
// You wrote:

// // let name:string="Anil Sidhu"; error because of properties like let const var not use

// Correct ✅
// Inside a class, variables are called properties, not normal variables.
// Correct way:
// name: string = "Anil Sidhu";
// Wrong way:
// let name = "Anil"; ❌
// Why?
// Because inside a class, properties belong to the object instance:
// this.name
// let, const, var are only used inside functions or blocks.

// 📌 Variable Types
// name: string = "Anil Sidhu";
// data: string | number = "Hello";
// other: any = true;
// 🔹 string
// Only accepts text.
// If you do:
// this.name = 20; ❌
// You get error → because 20 is number.
// 🔹 string | number (Union Type)
// data: string | number
// This means:
// Can store string
// Can store number
// So this works:
// this.data = 24;
// 🔹 any
// other: any = true;
// any means:
// I don’t care about type. Accept everything.
// Not recommended in production.
// Better to use proper types.

// 📌 updateName() Function
// updateName(){
//   let x=30;
//   this.name="Peter";
//   this.data=24;
//   this.other="anil";
//   this.other=30;
// }
// 🔹 let x=30;
// This is a local variable.
// It exists only inside function.
// You cannot access x outside this function.
// 🔹 this.name="Peter";
// Important rule:
// Inside class methods, always use:
// this.propertyName
// Why?
// Because properties belong to object instance.
// 📌 updateVar()
// updateVar(){
//   let x=30;
//   console.log(x);
// }
// Just normal JS function inside class.
// 📌 sum(a:number,b:number)
// sum(a:number,b:number){
//   console.log(a+b);
// }

// This is TypeScript function with typed parameters.
// If you call:
// <button (click)="sum(4,5)">Sum</button>
// What is this?
// Angular passes values.
// If you try:
// sum("4",5) ❌
// What is this?

// You get compile-time error.

// 📌 handleClickEvent()
// handleClickEvent(){
//   console.log("Function called")
//   this.otherFunction(); 
// }

// You are calling another method inside same class.
// Correct way:
// this.otherFunction()
// If you do:
// otherFunction() ❌

// It may not work properly in strict mode.
// 📌 HTML Template Explanation
// <h1>Angular Components</h1>

// <app-login></app-login>
// <app-signup></app-signup>
// <app-profile></app-profile>
// What is this?

// These are custom component selectors.
// They work because:
// imports: [LoginComponent, SignupComponent, ProfileComponent]
// Without imports → Angular error.
// 📌 Event Binding
// <button (click)="handleClickEvent()">Click Me</button>
// What is this?
// 🔹 (click)

// This is event binding syntax.
// Format:
// (eventName)="methodName()"
// Equivalent to JS:

// button.addEventListener("click", ...)
// 📌 Calling Functions with Parameters
// <button (click)="sum(4,5)">Sum</button>
// What is this?
// Angular allows passing values directly.
// 📌 Important Angular Concepts Used Here
// You just used:
// Standalone components
// Event binding
// Component imports
// TypeScript class properties
// Union types
// Method calling
// this keyword
// Template usage

// 🧠 Why No function Keyword?
// You wrote:
// // there is no need of function keyword for defining functions
// Correct ✅
// Inside class, we define methods like:
// methodName() {}
// Not:
// function methodName() ❌
// Because it's class method, not standalone function.
// 🎯 Execution Flow When You Click Button
// Example:
// <button (click)="handleClickEvent()">
// What is this?
// Flow:
// User Click
//    ↓
// Angular Event Binding
//    ↓
// handleClickEvent()
//    ↓
// otherFunction()
//    ↓
// Console Output
// 🚀 Small Improvements for Industry Level
// Change:
// styleUrl
// To:
// styleUrls
// Avoid using:
// any
// Instead use proper type.
// Example:
// other: string | number | boolean;

