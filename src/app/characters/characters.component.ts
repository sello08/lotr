import { RequestsService } from './../requests.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters : any;
  public cName : any;
  public cRace : any;
  public cGender : any; 
  public cSpouse : any;




  constructor(private reuestService : RequestsService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.reuestService.getCharacters().subscribe(data => {this.characters = data.docs})
  }

  getCharacter(character: any){
    this.cName = character.name;
    this.cRace = character.race;
    this.cGender = character.gender;
    this.cSpouse = character.spouse
  }
}
