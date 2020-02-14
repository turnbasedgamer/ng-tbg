import { Component, OnDestroy } from '@angular/core';
import { LogService } from './log.service';

@Component({
	selector: 'app-log',
	templateUrl: './log.component.html',
	styleUrls: ['./log.component.css']
})
export class LogComponent implements OnDestroy {
	log: string;
	sub: any;

	constructor(private logService: LogService) {
		this.log = 'Opened Log';
		this.sub = logService.subscribe((s) => {
			this.log += '\n' + s;
		});
		this.logService.info('Testing component');
	}

	ngOnDestroy() {
		this.logService.unsubscribe(this.sub);
	}
}
