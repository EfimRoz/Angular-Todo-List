import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todos: Todo[];
  @Input() editableTodo: Todo;
  @Output() onToggleTodoStatus = new EventEmitter<object>();
  @Output() onDeleteTodo = new EventEmitter<object>();
  @Output() onEditTodo = new EventEmitter<object>();
  @Output() onKeyboardUse = new EventEmitter<object>();
  tempVal:string = '';
  editTodo(todo, value){
    this.tempVal = value;
    this.onEditTodo.emit({todo:todo, value:value})
  };
  // keyboardUsed(key, value){
  //   console.log('new value: ',value);
  //   this.onKeyboardUse.emit(key);
  // }
}