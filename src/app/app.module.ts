import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { EditDetailsComponent } from './details/edit-details/edit-details.component';
import { DetailsReducer } from './store/details.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({reducer: DetailsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
