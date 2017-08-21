import { Injectable } from '@angular/core';
import { Todo } from './todo';

const LOCAL_STORAGE_TODOS:string = 'todos';
@Injectable()

export class TodoService {
    private todos:Todo[] = this.loadTodos();
    private editableTodo:Todo;
    addTodoObject(todoName:string){
        let todo:Todo = this.buildTodoObject(todoName);
        this.todos.push(todo);
        this.saveTodos(this.todos);
    }
    buildTodoObject(todoName:string){
        let todo:Todo = { id:this.generateId(), name:todoName, isComplete:false}
        return todo;
    };
    toggleTodoStatus(todo){
        //changing todo status
        todo.isComplete = !todo.isComplete;
        this.saveTodos(this.todos);
    };
    getTodos(){
        if(this.todos)
            return this.todos;
        else{
            this.todos = [{id: this.generateId(), name:'example', isComplete:false}];
            return this.todos;
        }
    }
    saveTodos(todos){
        localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(todos));
    };
    loadTodos(){
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS));
    };
    generateId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    deleteTodo(todoToFind){
        let idx:number = this.todos.findIndex( todo => todo === todoToFind )
        this.todos.splice(idx,1);
        this.saveTodos(this.todos);
    };
    editTodo(todo, value){
        if(this.editableTodo === todo){
            todo.name = value; 
            this.editableTodo = null; 
        }
        else
            this.editableTodo = todo;
    };
    updateEditableTodo(value){
        this.editableTodo.name = value;
        this.saveTodos(this.todos);
    };
    stopEditingTodo(value){
        this.editableTodo.name = value;
        this.editableTodo = null;
        this.saveTodos(this.todos);
    };
    getEditableTodo(){
        return this.editableTodo;
    };
}