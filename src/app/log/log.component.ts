import { Component, OnDestroy } from '@angular/core';
import { LogService } from './log.service';

@Component({
	selector: 'app-log',
	templateUrl: './log.component.html',
	styleUrls: ['./log.component.css']
})
export class LogComponent implements OnDestroy {
	log: string = "";
	sub: any;

	constructor(private logService: LogService) {
		this.sub = logService.subscribe((s) => {
			this.log += s + '\n';
		});
	}

	ngOnDestroy() {
		this.logService.unsubscribe(this.sub);
	}
}
