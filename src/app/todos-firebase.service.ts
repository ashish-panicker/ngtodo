import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import Todo from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosFirebaseService {

  fireStore = inject(Firestore)
  todoCollection = collection(this.fireStore, 'todos')

  getTodos(): Observable<Todo[]> {
    return collectionData(this.todoCollection, { idField: 'id' }) as Observable<Todo[]>
  }

  addTodo(text: string): Observable<string> {
    const id = addDoc(this.todoCollection, { text, 'isCompleted': false }).then(resp => resp.id)
    return from(id)
  }

}
