import { CtabComponent } from './Customer/ctab.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { CformComponent } from './Customer/cform.component';

@NgModule({
  declarations: [
    AppComponent,CtabComponent,CformComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [CustService],
  bootstrap: [AppComponent]
})
export class AppModule { }
