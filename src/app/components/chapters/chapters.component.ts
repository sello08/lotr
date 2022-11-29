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
  public bookOfChapter !: any;

  constructor(private requestsService : RequestsService) { }

  ngOnInit(): void {
    this.getChapters();
  }

  getChapters(){
    this.requestsService.getChapters().subscribe(response => {this.chapters = response.docs})
  }

  getThisChapterBook(id: string){
    this.requestsService.getBooks(id).subscribe(response => {this.bookOfChapter = response.docs[0].name})
  }

}
