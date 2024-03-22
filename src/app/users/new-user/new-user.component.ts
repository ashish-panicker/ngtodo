import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user';
import { UserFirebaseService } from '../user-firebase.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  user: User = new User('', '', '', '')
  userForm: FormGroup
  userService = inject(UserFirebaseService)

  constructor(private fb: FormBuilder) {
    // TODO Include form valdiation
    this.userForm = fb.group({
      fullname: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  createUser() {
    // TODO The submit button must be disabled till the action is complete
    // TODO Once the task is complete the user needs to be updated about that
    this.user = this.userForm.value as User
    console.log(this.user)
    // TODO Hash the password so that the password is not stored as plain text
    this.userService.createUser(this.user).subscribe(response => console.log(response))
  }

}
