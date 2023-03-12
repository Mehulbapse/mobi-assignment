import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataShareService } from '../data-share.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  
  searchText:any = "";
  constructor(private service:DataShareService) { }

  ngOnInit(): void {

    
  }

  getSearchText(text){
    this.service.setsearchValue(text)
  }
   

}
