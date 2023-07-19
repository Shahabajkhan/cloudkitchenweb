import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/Model/Order.Module';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{

  addOrderRequest: Order ={
    Row_ID:0,
    Name: '',
    Number: 0,
    Address: '',

  };
 
  

  constructor(private param:ActivatedRoute, private router : Router, private service: OrderDetailsService) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData = this.service.foodDetails.filter((value)=>{
       return value.id == this.getMenuId;

      });
      console.log(this.menuData,'menudata>>')
    }

  }

  public  addOrder() {
    console.log("Add Order clicked",this.addOrderRequest)
    // this.getMenuId = this.param.snapshot.paramMap.get('foodName');
    this.service.addOrder(this.addOrderRequest)
    .subscribe({
      next:(order) => {
        this.router.navigate(['menu']);
        console.log("Order!");
      }
    });
  }

}
