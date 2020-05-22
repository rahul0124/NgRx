import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  
  detailsForm: FormGroup;
  show_name_error: string;
  constructor(private dataService: DataService) {
    
   }

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contact': new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });
  }

  onSubmit(){
    const value = this.detailsForm.value;

    const newUser = new User(value.username, value.email, value.contact);
    this.dataService.AddData(newUser);

  }

}
