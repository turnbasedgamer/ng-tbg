import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	private log = new Subject<string>();
	sub: any;

	constructor() {
		// this.sub = this.subscribe((s: string) => {
		// 	console.log(`Log Service: ${s}`);
		// });
	}

	public subscribe(func: any): any {
		return this.getObservable().subscribe(func);
	}

	public unsubscribe(subscription: any) {
		(subscription as Subscription).unsubscribe();
	}

	public getObservable(): Observable<string> {
		return this.log.asObservable();
	}

	public test() {
		try {
			this.info('Testing log functionality');
		} catch (error) {
			console.log('Log test failed');
		}
	}

	public info(line: string) {
		this.log.next('(info) - ' + line);
	}

	public error(line: string) {
		this.log.next('(error) - ' + line);
	}
}
