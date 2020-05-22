import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError} from 'rxjs/operators';

import * as detailsActions from './details.actions';
import { DataService } from '../data.service';
import { of } from 'rxjs';

@Injectable()
export class DataEffects {
  constructor(private actions: Actions, private dataService: DataService) {}

  @Effect()
  loadData = this.actions.pipe(
    ofType(detailsActions.ActionTypes.LoadFetchDetails),
    switchMap(() => 
      this.dataService.loadData().pipe(
        map((data:any)=> new detailsActions.LoadDataSuccess(data)),
        catchError(error =>
          of(new detailsActions.LoadDataFailure(error.message)))
    )
  )
  );
}
