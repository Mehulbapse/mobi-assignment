import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  
  searchText:any = "";
  constructor() { }

  ngOnInit(): void {

    
  }

   

}
