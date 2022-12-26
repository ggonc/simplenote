import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NoteViewModel } from 'src/app/mock/models/notes.type';
import { NotesListService } from './notes-list.service';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  columnsToDisplay = ['actions', 'title', 'category', 'modifiedIn'];
  data: NoteViewModel[] = [];

  @ViewChild(MatTable) table: MatTable<NoteViewModel>;
  
  constructor(
    private route: ActivatedRoute,
    private _service: NotesListService
    ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  addNote(): void {
    this.data.push({
        id: 4,
        title: "Title #04",
        content: "Lorem Ipsum dolor sit amet lorem",
        category: "Category #04",
        modifiedIn: "2022-12-06"
    });
    this.table.renderRows();
  }

  getNotes(): void {
    this._service.getNotes().subscribe(notes => {
      this.data = notes
    });
  }

  deleteNote(id: number): void {
    this.data.splice(this.data.findIndex(e => e.id === id), 1);
    this.table.renderRows();
  }

}
