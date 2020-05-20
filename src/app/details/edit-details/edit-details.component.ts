import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  onAddItems(form: NgForm){
    const value = form.value;
    const newUser = new User(value.name, value.email, value.contact);
    this.dataService.AddData(newUser);
  }

}
