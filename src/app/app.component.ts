import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1 class="ml-4">{{pageTitle}}</h1>
      <app-products></app-products>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
