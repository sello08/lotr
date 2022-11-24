import { RequestsService } from '../../requests.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  
  public chapters : any;

  constructor(private requestsService : RequestsService) { }

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters(){
    this.requestsService.getChapters().subscribe(data => {this.chapters = data.docs})
  }

}
