import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../Model/Order.Module';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  baseApiUrl : String = environment.baseApiUrl;
  addOrderRequest: any;
  console: any;

  constructor(private http:HttpClient) { }
  


//fooddetails

foodDetails = [
  {
    id:1,
    foodName:"Sandwich",
    foodDetails:"Pan-fried masala paneer",
    foodPrice: 200,
    foodImg:"https://images.unsplash.com/photo-1639744093378-b2fde867b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    id:2,
    foodName:"Oreo-Shake",
    foodDetails:"Oreo Shake with cookies",
    foodPrice: 200,
    foodImg:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
  },
  {
    id:3,
    foodName:"Noodles",
    foodDetails:"Noodles with Shrimps",
    foodPrice: 160,
    foodImg:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id:4,
    foodName:"cake",
    foodDetails:"Raspberry Cake with whipped cream",
    foodPrice: 120,
    foodImg:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
  },
  {
    id:5,
    foodName:"Burger",
    foodDetails:"Meat and cheese burger surrounded with fresh vegetables",
    foodPrice: 180,
    foodImg:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
  },
  {
    id:6,
    foodName:"American Chocolate",
    foodDetails:"Loaded with dark Chocolate",
    foodPrice: 200,
    foodImg:"https://images.unsplash.com/photo-1590080876477-fa40830fe6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  },
  {
    id:7,
    foodName:"Pizza",
    foodDetails:"Pizza with green and red bell pepper and cheese",
    foodPrice: 250,
    foodImg:"https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
  },
  {
    id:8,
    foodName:"Mojito",
    foodDetails:"Strawberry Mojito {Easy and Refreshing}",
    foodPrice: 150,
    foodImg:"https://www.wellplated.com/wp-content/uploads/2016/05/Strawberry-Mojito-Drink.jpg"
  }
]

addOrder(addOrderRequest: Order): Observable<Order>{
  addOrderRequest.Row_ID = 0;
 
 
  return this.http.post<Order>(this.baseApiUrl + '/api/order',addOrderRequest);
}




}
