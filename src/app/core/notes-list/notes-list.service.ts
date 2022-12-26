import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NOTES } from 'src/app/mock/mock-notes';
import { NoteViewModel } from 'src/app/mock/models/notes.type';

@Injectable({
  providedIn: 'root'
})
export class NotesListService {
  note: any;

  constructor() { }

  getNotes(): Observable<NoteViewModel[]> {
    const notes = of(NOTES);
    return notes;
  }

  getNote(id: number | string): NoteViewModel { 
    const note = NOTES.find(e => e.id === id) 
    return note!;
  }

}
