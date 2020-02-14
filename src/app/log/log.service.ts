import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	private log = new Subject<string>();
	sub: any;
  private debugMode: boolean;

	constructor() {
		this.debugMode = false;
	}
  public enableDebug() {
    this.debugMode = true;
    this.debug('Debug Mode Enabled');
  }

  public disableDebug() {
    this.debug('Debug Mode Disabled');
    this.debugMode = false
  }

  public isDebugModeEnabled(): boolean {
    return this.debugMode;
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
			this.info('Info Test');
      this.error('Error Test');
      this.debug('Debug Test');
		} catch (error) {
			console.log('Log test failed');
		}
	}

	public info(line: string) {
		this.log.next('(info) - ' + line);
	}

  public debug(line: string) {
    if(this.debugMode) {
		  this.log.next('(debug) - ' + line);
    }
    console.log(line);
	}

	public error(line: string) {
		this.log.next('(error) - ' + line);
	}
}
