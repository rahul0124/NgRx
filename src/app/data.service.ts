import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from './shared/user';



@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  private url = "https://jsonplaceholder.typicode.com/users";

  loadData() {
    return this.http.get(this.url);
  }

  AddData(postData:User){
    this.http
    .post(
      'https://jsonplaceholder.typicode.com/users',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    })
    console.log("submitted");
    alert("Data Submitted");
    //this.http.post works as Observable which we subscribed
    //console.log(postData);
  }

}
