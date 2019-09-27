import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-angular-grids';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ProductStoreService } from './product-store.service';

@Component({
  selector: 'app-root',
  template: `
  <ejs-grid [dataSource]="products | async" [editSettings]="editSettings" (dataStateChange)= "dataStateChange($event)" (dataSourceChanged)="dataSourceChanged($event)" [toolbar]="toolbar" >
    <e-columns>
      <e-column field='id' headerText='ID' [isPrimaryKey]='true'></e-column>
      <e-column field='name' headerText='Name'></e-column>
      <e-column field='location' headerText='City' [allowEditing]='false' ></e-column>
      <e-column field='contact' headerText='Contact Number'></e-column>      
    </e-columns>
  </ejs-grid>`,
//  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-grid-app';
  public products: Observable<DataStateChangeEventArgs>;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  constructor(private productservice: ProductStoreService){
    this.products = productservice;
  }

    ngOnInit(){
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const state: any = { skip: 0, take: 12 };
    this.productservice.execute(state);
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
        this.productservice.execute(state);
  }

    public dataSourceChanged(state: DataSourceChangedEventArgs): void {
        if (state.action === 'add') {
            this.productservice.addRecord(state).subscribe(() => {
                state.endEdit()
            });
        } else if (state.action === 'edit') {
            this.productservice.updateRecord(state).subscribe(() => {
                state.endEdit()
            });
        } else if (state.requestType === 'delete') {
            this.productservice.deleteRecord(state).subscribe(() => {
                state.endEdit()
            });
        }
    }
 
}
