import { FoodSpecialist } from './../myClasses/food-specialist';
import { Coach } from './../myClasses/coach';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../myClasses/client';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private ClientRegisterUrl: string;
  private CoachRegisterUrl: string;
  private FoodSpecialistRegisterUrl: string;

  constructor( private http: HttpClient) { 
    this.ClientRegisterUrl = 'http://localhost:8015/api/register/addClient';
    this.CoachRegisterUrl = 'http://localhost:8015/api/register/addCoach';
    this.FoodSpecialistRegisterUrl = 'http://localhost:8015/api/register/addFoodSpecialist';
  }

  public addCoach(coach: Coach){
    return this.http.post<Coach>(this.CoachRegisterUrl, coach);
  }

  public addClient(client: Client){
    return this.http.post<Client>(this.ClientRegisterUrl, client);
  }

  public addFoodSpecialist(foodSpecialist: FoodSpecialist) {
    return this.http.post<FoodSpecialist>(this.FoodSpecialistRegisterUrl, foodSpecialist);
  }
}
