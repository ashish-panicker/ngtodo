import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosFirebaseService } from './todos-firebase.service';
import Todo from './todo';
import { NgFor } from '@angular/common';
import { LoremIpsum } from 'lorem-ipsum';
import { NewUserComponent } from './users/new-user/new-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoService = inject(TodosFirebaseService)
  todos: Todo[] = []
  lorem = new LoremIpsum();

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  newTodo() {
    this.todoService.addTodo(this.lorem.generateSentences(1)).subscribe(id => console.log(id))
  }

}
