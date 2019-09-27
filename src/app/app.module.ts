import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { GridModule, PagerModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ProductDataService } from './product-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    GridModule, PagerModule,
    InMemoryWebApiModule.forRoot(ProductDataService), HttpClientModule
  ],
  providers: [EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
