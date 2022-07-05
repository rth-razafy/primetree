import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NodeService } from './nodeservice';

// import {TreeModule,TreeNode} from 'primeng/tree';
import {TreeModule} from 'primeng/tree'; 
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {PickListModule} from 'primeng/picklist';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    PickListModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NodeService, ConfirmationService]
})
export class AppModule { 

}
