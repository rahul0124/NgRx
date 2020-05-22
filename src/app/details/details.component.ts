import { Component, OnInit } from '@angular/core';
import { User, Product } from '../shared/user';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actionstype from "../store/details.actions";
import * as fromDetails from '../store/details.reducer';
import { map, tap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { act } from '@ngrx/effects';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public showModal: boolean;
  details: Observable<any>;
  error: Observable<any>;
  errorMessage:'';
  product: any;
  result= [];
  products$: Observable<Product[]>;
  
  selectedProduct: Product | null;
  
  ingredients: Observable<{ingredients: User[]}>
  productForm: FormGroup;


  constructor(private store: Store<any>,private dataService: DataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: [''],
      productCompleted:['']
    });

    this.store.dispatch(new actionstype.LoadFetchDetails());
    this.products$ = this.store.pipe(select(fromDetails.getDetails)) as Observable<Product[]>;
    this.error = this.store.pipe(select(fromDetails.getError));

    }



    deleteItem(id:number):void{
      this.dataService.deleteProduct(id).subscribe();
    }



    viewDetails(product: Product){
      this.store.dispatch(new actionstype.SetCurrentProduct(product));


      this.store.pipe(select(fromDetails.getCurrentProduct)).subscribe(res => this.selectedProduct=res);
      console.log(this.selectedProduct)

      this.productForm.patchValue({
        productName: this.selectedProduct.title,
        productCompleted: this.selectedProduct.completed
      });
      console.log(this.result);
      this.showModal=true;
    }

    
    updateDetails(){
      const p = { ...this.product, ...this.productForm.value };

      console.log(p);
  
      this.dataService.updateProduct(p).subscribe({
        next: product => this.store.dispatch(new actionstype.SetCurrentProduct(product)),
        error: err => this.errorMessage = err.error

      });
      this.showModal=false;
      
    }

    }
  

