import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { player} from '../player'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "http://localhost:3000/players"

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<player[]> {
    return this.http.get<player[]>(this.apiUrl);
  }
  getTopPoints(): Observable<player[]>{
    return this.http.get<player[]>(this.apiUrl+ "/top-average-points")
    //top-average-points
  }
  getTopAssists(): Observable<player[]> {
    return this.http.get<player[]>(this.apiUrl + "/top-average-assists");
  }
  getTopSteals():Observable<player[]> {
    return this.http.get<player[]>(this.apiUrl + "/top-average-steals");
  }
  getTopBlocks():Observable<player[]> {
    return this.http.get<player[]>(this.apiUrl + "/top-average-blocks");
  }
  getPointOrder():Observable<player[]> {
    return this.http.get<player[]>(this.apiUrl + "/point-order");
  }
  postAddPlay(newPlayer: player): Observable<any> {
    return this.http.post<any>(this.apiUrl, newPlayer);
  }
  
}
