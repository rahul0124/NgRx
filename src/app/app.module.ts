import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { EditDetailsComponent } from './details/edit-details/edit-details.component';
import { DetailsReducer } from './store/details.reducer';
import { DataService } from './data.service';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './store/details.effects';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EditDetailsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({reducer: DetailsReducer}),
    EffectsModule.forRoot([DataEffects]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
