import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule} from './mat.module';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent} from './Customer/customer-details.component';
import { HttpClientModule} from '@angular/common/http'
import { DialogComponet} from './shared/diaog.component';
const routes: Routes = [
  {path : 'customer' , component : CustomerDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    DialogComponet
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    // AppRoutingModule,
    MatModule,
    ReactiveFormsModule,
    FormsModule,      
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponet]
})
export class AppModule { }
