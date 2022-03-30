import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { AddPromotionComponent } from './components/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './components/edit-promotion/edit-promotion.component';
import { PromotionsListComponent } from './components/promotions-list/promotions-list.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'add-game', component: AddGameComponent },
  { path: 'edit-game/:id', component: EditGameComponent },
  { path: 'games-list', component: GamesListComponent },
  { path: 'add-promotion', component: AddPromotionComponent },
  { path: 'edit-promotion/:id', component: EditPromotionComponent },
  { path: 'promotions-list', component: PromotionsListComponent },
  { path: 'add-store', component: AddStoreComponent },
  { path: 'edit-store/:id', component: EditStoreComponent },
  { path: 'stores-list', component: StoresListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
