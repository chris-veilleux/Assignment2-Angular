import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

import { AddGameComponent } from './components/add-game/add-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GamesListComponent } from './components/games-list/games-list.component';

import { AddStoreComponent } from './components/add-store/add-store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';

import { AddSportComponent } from './components/add-sport/add-sport.component';
import { EditSportComponent } from './components/edit-sport/edit-sport.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';

import { AddCreditComponent } from './components/add-credit/add-credit.component';
import { EditCreditComponent } from './components/edit-credit/edit-credit.component';
import { CreditListComponent } from './components/credit-list/credit-list.component';

import { AddPromotionComponent } from './components/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './components/edit-promotion/edit-promotion.component';
import { PromotionsListComponent } from './components/promotions-list/promotions-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    AddGameComponent,
    EditGameComponent,
    GamesListComponent,
    AddStoreComponent,
    EditStoreComponent,
    StoresListComponent,
    AddSportComponent,
    EditSportComponent,
    SportsListComponent,
    AddCreditComponent,
    EditCreditComponent,
    CreditListComponent,
    AddPromotionComponent,
    EditPromotionComponent,
    PromotionsListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
