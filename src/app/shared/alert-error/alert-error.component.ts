import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lt-alert-error',
  template: `
    <p>
      alert-error Works!
    </p>
  `,
  styleUrls: ['./alert-error.component.less']
})
export class AlertErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
