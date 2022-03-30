import { Injectable } from '@angular/core';
import { Student } from './student';
import { Game } from './game';
import { Promotion } from './promotion';
import { Store } from './store';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Sport } from './sport';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'http://localhost:8000/api/students';
  gameEndpoint: string = 'http://localhost:8000/api/games';
  promotionEndpoint: string = 'http://localhost:8000/api/promotions';
  storeEndpoint: string = 'http://localhost:8000/api/stores';
  sportEndpoint: string = 'http://localhost:8000/api/sports';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Add student
  AddStudent(data: Student): Observable<any> {
    let API_URL = `${this.endpoint}/add-student`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all students
  GetStudents() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get student
  GetStudent(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-student/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update student
  UpdateStudent(id, data): Observable<any> {
    let API_URL = `${this.endpoint}/update-student/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete student
  DeleteStudent(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-student/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }


//////////////////////////////////////////////


  // Add game
  AddGame(data: Game): Observable<any> {
    let API_URL = `${this.gameEndpoint}/add-game`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all games
  GetGames() {
    return this.http.get(`${this.gameEndpoint}`);
  }

  // Get games
  GetGame(id): Observable<any> {
    let API_URL = `${this.gameEndpoint}/read-game/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update games
  UpdateGame(id, data): Observable<any> {
    let API_URL = `${this.gameEndpoint}/update-game/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete games
  DeleteGame(id): Observable<any> {
    var API_URL = `${this.gameEndpoint}/delete-game/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }


  ///////////////////////////////////////////////////////////
  // Add promotion
  AddPromotion(data: Promotion): Observable<any> {
    let API_URL = `${this.promotionEndpoint}/add-promotion`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all promotions
  GetPromotions() {
    return this.http.get(`${this.promotionEndpoint}`);
  }

  // Get promotions
  GetPromotion(id): Observable<any> {
    let API_URL = `${this.promotionEndpoint}/read-promotion/${id}`;
/////////////////////////////////////////////////////////////////


  // Add store
  AddStore(data: Store): Observable<any> {
    let API_URL = `${this.storeEndpoint}/add-store`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all stores
  GetStores() {
    return this.http.get(`${this.storeEndpoint}`);
  }

  // Get stores
  GetStore(id): Observable<any> {
    let API_URL = `${this.storeEndpoint}/read-store/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update promotions
  UpdatePromotion(id, data): Observable<any> {
    let API_URL = `${this.promotionEndpoint}/update-promotion/${id}`;
  // Update stores
  UpdateStore(id, data): Observable<any> {
    let API_URL = `${this.storeEndpoint}/update-store/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete promotions
  DeletePromotion(id): Observable<any> {
    var API_URL = `${this.promotionEndpoint}/delete-promotion/${id}`;
  // Delete stores
  DeleteStore(id): Observable<any> {
    var API_URL = `${this.storeEndpoint}/delete-store/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }

//////////////////////////////////////////////////////////
 
// Add store
  AddSport(data: Sport): Observable<any> {
    let API_URL = `${this.sportEndpoint}/add-sport`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all stores
  GetSports() {
    return this.http.get(`${this.sportEndpoint}`);
  }

  // Get stores
  GetSport(id): Observable<any> {
    let API_URL = `${this.sportEndpoint}/read-sport/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update stores
  UpdateSport(id, data): Observable<any> {
    let API_URL = `${this.sportEndpoint}/update-sport/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete stores
  DeleteSport(id): Observable<any> {
    var API_URL = `${this.sportEndpoint}/delete-sport/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }

///////////////////////////////////////////////////

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
