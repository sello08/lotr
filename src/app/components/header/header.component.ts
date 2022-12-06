
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public filter : string = ""


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  movies(){
    this.filter = "Search for Movie"
  }
  chapters(){
    this.filter = "Search for Chapter"
  }
  characters(){
    this.filter = "Search for Character"
  }


}
