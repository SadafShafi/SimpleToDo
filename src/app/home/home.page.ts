import { Component } from '@angular/core';
import { ToDoServiceService } from '../to-do-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newTask:string;
  tasks = [];
  myService = new ToDoServiceService()
  tooo = []



  constructor() {
    this.showTasks()
    // this.myService.saveTodos([])
  }

  // // ser:DatamodserService
  addTask(){

    if(this.newTask){
      // get previously saved data
      this.tasks =  this.showTasks()


      // add new data
      this.tasks.unshift({task:this.newTask,status:false})
      this.newTask = "";

      //service save
      this.myService.saveTodos(this.tasks);
      this.showTasks()
    }
  }




  showTasks(){
    // service Get
    this.tooo = this.myService.getTodos();

    return this.tooo
  }



  TaskClicked(todo){
   // save the status of the clicked task
    // console.log(todo)
    this.myService.saveTodos(todo);
  }


  // fuzool(){
  //   console.log("fuzol")
  // }

 
  deleteTask(todo){
      var i = this.tooo.length;
      
      //delete the todo
      while(i--){
         if(this.tooo[i]["task"] === todo["task"] ){ 
  
             this.tooo.splice(i,1);
         }
      }

      // Service Save
      this.myService.saveTodos(this.tooo);
      
  }

  

  

}
