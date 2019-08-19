import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { TodoItem} from '../model/todoItem';
import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   apiURl ="http://localhost:21260/api/";
  constructor(public http : HttpClient) { }

  getTodosItem():Observable<TodoItem[]>
  {
    return this.http.get<TodoItem[]>(this.apiURl+"todo/GetTodosAsync");
  }

  getTodoItem(id : number):Observable<TodoItem>
  {
    return this.http.get<TodoItem>(this.apiURl+"todo/GetTodoAsync?id="+id);
  }

  AddTodoItemFormBody(todoItem : TodoItem):Observable<any>{
    return this.http.post<any>(this.apiURl+"todo/InsertData1",todoItem);
  }

  
  // AddTodoItem(todoItem : TodoItem):Observable<any>{
  //   return this.http.post<any>(this.apiURl+"todo/InsertData?Id="+todoItem.Id+"&Name="+todoItem.Name+"&IsComplete="+todoItem.IsComplete);
  // }

  UpdateTodoFromBody(todoItem:TodoItem):Observable<any>{
    return this.http.put<any>(this.apiURl+"todo/UpdateData1?Id="+todoItem.Id,todoItem);
  }

  DeleteTodoItem(Id: number):Observable<number>{
    return this.http.delete<number>(this.apiURl+"todo/DeleteTodo?Id="+Id);
  }
}
