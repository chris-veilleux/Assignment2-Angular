import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import Student Components
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

// import Game Components
import { AddGameComponent } from './components/add-game/add-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// import Store Components
import { AddStoreComponent } from './components/add-store/add-store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';

// import Sport Components
import { AddSportComponent } from './components/add-sport/add-sport.component';
import { EditSportComponent } from './components/edit-sport/edit-sport.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';

// import Credit Components
import { AddCreditComponent } from './components/add-credit/add-credit.component';
import { EditCreditComponent } from './components/edit-credit/edit-credit.component';
import { CreditListComponent } from './components/credit-list/credit-list.component';

// import Promotion Components
import { AddPromotionComponent } from './components/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './components/edit-promotion/edit-promotion.component';
import { PromotionsListComponent } from './components/promotions-list/promotions-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },

  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },

  { path: 'add-game', component: AddGameComponent },
  { path: 'edit-game/:id', component: EditGameComponent },
  { path: 'games-list', component: GamesListComponent },

  { path: 'add-store', component: AddStoreComponent },
  { path: 'edit-store/:id', component: EditStoreComponent },
  { path: 'stores-list', component: StoresListComponent },

  { path: 'add-sport', component: AddSportComponent },
  { path: 'edit-sport/:id', component: EditSportComponent },
  { path: 'sports-list', component: SportsListComponent },

  { path: 'add-credit', component: AddCreditComponent },
  { path: 'edit-credit/:id', component: EditCreditComponent },
  { path: 'credit-list', component: CreditListComponent },
  
  { path: 'add-promotion', component: AddPromotionComponent },
  { path: 'edit-promotion/:id', component: EditPromotionComponent },
  { path: 'promotions-list', component: PromotionsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
