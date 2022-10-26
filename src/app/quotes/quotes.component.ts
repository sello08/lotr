import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public show: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  changeShow(){
    //this.router.navigateByUrl("characters")
    
  }

}
