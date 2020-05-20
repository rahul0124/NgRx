import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actionstype from "../store/details.actions";
import * as fromDetails from '../store/details.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: Observable<any>;
  error: Observable<any>;
  
  ingredients: Observable<{ingredients: User[]}>


  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new actionstype.LoadFetchDetails());
    this.details = this.store.pipe(select(fromDetails.getDetails));
    this.error = this.store.pipe(select(fromDetails.getError));
  
    console.log(this.details);

  }

}
