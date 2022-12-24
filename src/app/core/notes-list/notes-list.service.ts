import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NOTES } from 'src/app/mock/mock-notes';
import { NotesViewModel } from 'src/app/mock/models/notes.type';

@Injectable({
  providedIn: 'root'
})
export class NotesListService {

  constructor() { }

  getNotes(): Observable<NotesViewModel[]> {
    const notes = of(NOTES);
    return notes;
  }

}
