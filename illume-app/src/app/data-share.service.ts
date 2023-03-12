import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
 
  private searchValue: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }


  getsearchValue(): Observable<string> {
    return this.searchValue;
  }

  setsearchValue(text){
    this.searchValue.next(text)
  }
}
