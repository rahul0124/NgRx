import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User, Product } from './shared/user';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromDetails from './store/details.reducer';


@Injectable()
export class DataService {
  constructor(private http: HttpClient,
    private store: Store<any>) {}
  private url = "https://jsonplaceholder.typicode.com/todos";

  loadData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
    );
  }

  currentData(): Observable<Product>{
    return this.store.pipe(select(fromDetails.getCurrentProduct)).pipe(
      tap(data => console.log(JSON.stringify(data))),
    );
  }

  AddData(postData:User){
    this.http
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    })
    console.log("submitted");
    alert("Data Submitted");
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    alert(id+" Item deleted successfully");
    return this.http.delete<Product>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
      );
    
    
  }

  updateProduct(product: Product): Observable<Product> {

    console.log("update Product Service method Called");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${product.id}`;
    return this.http.put<Product>(url, product, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        map(() => product)
      );
  }

}
