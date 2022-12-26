import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { NoteViewModel } from 'src/app/mock/models/notes.type';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { NotesListService } from '../notes-list/notes-list.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  note: NoteViewModel
  private routeSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: NotesListService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.note = this._service.getNote(+params['id'])
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
