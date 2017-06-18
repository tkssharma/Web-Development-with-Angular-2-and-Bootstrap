import {Component} from '@angular/core';

@Component({selector: 'notes-container',
templateUrl: 'app/note-container.html',
   styles: [`
      .notes {
       padding-top : 50px;
      }
      .creator {
       margin-bottom : 40px;
      }
    `]})

export class NoteContainer {
 // lifecycle methods
 note : string;
 constructor() {
  this.note = 'hello world';
 }

}