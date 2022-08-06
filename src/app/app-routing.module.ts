import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { Error404Component } from './core/error404/error404.component';
import { NoteComponent } from './core/note/note.component';
import { NotesListComponent } from './core/notes-list/notes-list.component';
import { SettingsComponent } from './core/settings/settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent},
  { path: 'home', component: DashboardComponent},
  { path: 'notes', component: NotesListComponent},
  { path: 'note', component: NoteComponent},
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
