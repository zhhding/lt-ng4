import { Component } from '@angular/core';

@Component({
  selector: 'lt-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'lt';
}
