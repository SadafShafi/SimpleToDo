import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor() { }

  saveTodos(Todo_array){

    localStorage.setItem('todos', JSON.stringify(Todo_array) );
    console.log("saved >>>>>>>>>>> ");
    // console.log(Todo_array);

  }

  getTodos(){

    let todos = localStorage.getItem('todos');
    var mytodos = JSON.parse(todos)
    // console.log(mytodos);
    // console.log("got item");
    if(mytodos[0]){
      console.log("todo when todo is present");
      console.log(mytodos)
      return mytodos;
    }
    else{
      console.log("getting todos when theres no todo")
      return [{task:"add task",status:false}]
    }
    // return mytodos

  }
}
