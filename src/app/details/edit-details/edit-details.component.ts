import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as detailsActions from '../../store/details.actions';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {


  
  constructor(private store: Store<{ reducer: {user: User[]}}>) { }

  ngOnInit(): void {
  }
  onAddItems(form: NgForm){
    const value = form.value;
    const newUser = new User(value.name, value.email, value.contact);
    this.store.dispatch(new detailsActions.AddUser(newUser));
  }

}
