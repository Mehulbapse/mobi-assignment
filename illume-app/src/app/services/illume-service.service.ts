import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../data.model';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class IllumeServiceService {

  url =" https://devwebapi.edgelearning.co.in/api/interview/certification"
  constructor(private restapi:DataServiceService) { 


  }

  getData = ()=>{
     return this.restapi.getAll(this.url)
  }
}
