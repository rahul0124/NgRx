import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  ingredients: Observable<{ingredients: User[]}>


  constructor(private store: Store<{reducer: {ingredients: User[]}}>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('reducer');
  }

}
