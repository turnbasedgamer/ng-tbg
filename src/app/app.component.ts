import { Component, OnInit } from '@angular/core';
import { LogService } from '../common/log/log.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private log: LogService) {
    
  }

  ngOnInit() {
    this.log.enableDebug();
    this.log.test();
  }
}
