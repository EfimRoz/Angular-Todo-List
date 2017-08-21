import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService }     from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'Todo list';
  constructor(
    private todoService: TodoService
  ){};
 // todos: Todo[] = this.todoService.getTodos();
  onAddTodo(todoName){
    let todo = this.todoService.addTodoObject(todoName);
  };
  onToggleTodoStatus(todo){
    //changing todo complete status
    this.todoService.toggleTodoStatus(todo);
  };
  deleteTodo(todo){
    this.todoService.deleteTodo(todo);
  };
  editTodo(payload){
    //editing an todo item
    this.todoService.editTodo(payload.todo, payload.value);
  };
  stopEditingTodo(){

  };
  handleKeyboardEvent(input){
    if(input.key.code === 'Enter'){
        this.todoService.stopEditingTodo(input.value);
        input.key.preventDefault();
    }
    else
      this.todoService.updateEditableTodo(input.value);
  };
}
