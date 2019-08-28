import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand navbar-light alert alert-primary">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" [routerLink]="['/welcome']" >Home</a></li>
        <li><a class="nav-link" [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class="container mt-5">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
