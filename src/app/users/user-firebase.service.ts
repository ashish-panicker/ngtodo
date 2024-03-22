import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { User } from './user';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseService {

  fireStore = inject(Firestore)
  userCollection = collection(this.fireStore, 'users')

  createUser(user: User): Observable<string> {
    const userId = addDoc(this.userCollection, user)
      .then(response => response.id)
    return from(userId)
  }
}
