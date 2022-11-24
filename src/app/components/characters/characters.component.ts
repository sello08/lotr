
import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/characters';
import { RequestsService } from 'src/app/services/requests.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters !: Characters[];
  public cName !: string;
  public cRace !: string;
  public cGender !: string; 
  public cSpouse !: string;
  public quote !: string;
  public isClicked : boolean = false;




  constructor(private requestService : RequestsService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.requestService.getCharacters().subscribe(data => {this.characters = data.docs})
  }
  

  getCharacter(character: Characters){
    this.isClicked = true;
    this.cName = character.name;
    this.cRace = character.race;
    this.cGender = character.gender;
    this.cSpouse = character.spouse;
    this.requestService.getCharacterQuotes(character._id).subscribe(data => {

      if(data.docs.length){
        this.quote = data.docs[0].dialog
      }else{
        this.quote = "Could not find any quote for this character"

      }
      
      })
    }
  }
