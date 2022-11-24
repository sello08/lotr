import { Chapters } from 'src/app/models/chapters';
import { RequestsService } from '../../services/requests.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  
  public chapters !: Chapters[];

  constructor(private requestsService : RequestsService) { }

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters(){
    this.requestsService.getChapters().subscribe(response => {this.chapters = response.docs})
  }

}
