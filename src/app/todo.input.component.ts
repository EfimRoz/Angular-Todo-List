import { Component, EventEmitter, Output} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'todo-input',
  templateUrl: './todo.input.component.html',
  styleUrls: ['./todo.input.component.css']
})
export class TodoInputComponent {
  @Output() onAddTodo = new EventEmitter<string>()
  addInput(val:string){
    this.onAddTodo.emit(val);
  }
}