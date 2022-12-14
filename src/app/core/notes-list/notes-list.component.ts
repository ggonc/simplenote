import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

const ELEMENT_DATA: Notes[] = [
  {
    title: "Title #01",
    content: "Lorem Ipsum",
    category: "Category #01",
    modifiedIn: "2022-12-03",
  },
  {
    title: "Title #02",
    content: "Lorem Ipsum dolor",
    category: "Category #02",
    modifiedIn: "2022-12-04"
  },
  {
    title: "Title #03",
    content: "Lorem Ipsum dolor sit amet",
    category: "Category #03",
    modifiedIn: "2022-12-05"
  }
]

export interface Notes {
  title: string;
  content: string;
  category: string;
  modifiedIn: string
}

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  columnsToDisplay = ['actions', 'title', 'category', 'modifiedIn'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<Notes>;

  constructor() { }

  ngOnInit(): void {
  }

  addNote(): void {
    this.dataSource.push({
        title: "Title #04",
        content: "Lorem Ipsum dolor sit amet lorem",
        category: "Category #04",
        modifiedIn: "2022-12-06"
    });
    this.table.renderRows();
  }

}
