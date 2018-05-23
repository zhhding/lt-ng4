import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lt-alert',
  template: `
    <p>
      alert Works!
    </p>
  `,
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
