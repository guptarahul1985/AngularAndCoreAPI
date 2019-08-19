import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from '../model/customer';
import { Category } from '../model/category';
import { CustomerService} from '../services/customer.service';
import { TodoItem} from "../model/todoItem";
import {MatDialog} from '@angular/material/dialog';
import { DialogComponet} from '../shared/diaog.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers: Customer[];
  categories: Category[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  todoItems : TodoItem[];
  todoItem : TodoItem;
  deletedId :number;
  constructor(public customerService : CustomerService,
    public dialog: MatDialog) { }

  ngOnInit() {
    debugger;
    this.customers = this.displayCustomerDetails();
    this.categories = this.displayCategory();
    this.AddTodoItem(111);
    this.AddTodoItem(112);
    this.AddTodoItem(113);
    this.AddTodoItem(114);
    console.log("Added TodoItem ="+this.todoItem);
    this.getTodoItem(111);
    this.getTodoList();
    console.log("Todoitem = "+this.todoItem);
    console.log("TodoItems = "+this.todoItems);
    this.ReomveTodoItem(112);
    console.log("Deleted item = "+ this.deletedId)
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponet, {
      width: '250px',
      data: {name: "Rahul", animal: "Dog"}
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log("Name= "+data);
      this.dataSource =  [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }];
    });
  }

  getTodoList():void{
   this.customerService.getTodosItem()
        .subscribe((res:TodoItem[])=> {
          console.log(res),
          this.todoItems =  res});
        }

  getTodoItem(Id : number):void{
   this.customerService.getTodoItem(Id)
        .subscribe((res:TodoItem)=> {
          console.log(res),
          this.todoItem = res});
  }

  AddTodoItem(id :number):void{
    var item  =new TodoItem();
    item.IsComplete =false;
    item.Id = id;
    item.Name = "AAAAA";
    this.customerService.AddTodoItemFormBody(item)
                        .subscribe(data =>{
                          console.log(data),
                          this.todoItem = data
                        });
  }

  

  ReomveTodoItem(Id: number):void{
    this.customerService.DeleteTodoItem(111)
    .subscribe(data => {console.log(data),
                          this.deletedId = data});
  }



  displayCategory(): Category[] {
    var result = [{
      "categoryId": 1,
      "categoryName": "Category1"
    },
    {
      "categoryId": 2,
      "categoryName": "Category2"
    },
    {
      "categoryId": 3,
      "categoryName": "Category3"
    }];
    return result;
  }

  displayCustomerDetails(): Customer[] {
    var result =
      [
        {
          "firstName": "Rahul",
          "lastName": "Gupta",
          "gender": "Male",
          "contactType": "mobile",
          "mobile": 9540054234,
          "email": "gupta.rahul375@gmail.com",
          "address": "Whitefield Bangalore",
          "department": "IT"
        }
      ];
    return result;
  }

}
