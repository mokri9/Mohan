import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent}from './app.component';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/productFilter.pipe';


@NgModule({
    // All the modules will be declared here
    declarations: [AppComponent,
   HeaderComponent,
   ProductComponent,
   MyUpperPipe,
   DiscountPipe,
   ProductSearchPipe
 ],
    imports: [ BrowserModule,FormsModule ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
