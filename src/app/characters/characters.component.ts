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
  public quote : any;
  public isClicked : boolean = false;




  constructor(private requestService : RequestsService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.requestService.getCharacters().subscribe(data => {this.characters = data.docs})
  }
  

  getCharacter(character: any){
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
