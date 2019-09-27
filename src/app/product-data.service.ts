import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService implements InMemoryDbService {

  constructor() { }
   createDb(){
    const products: ProductModel[] = [
      { id: 1, name: 'Ram', location: 'Brazil', contact: '0000000000'  },
      { id: 2, name: 'Shyam', location: 'Austria', contact: '1111111111'  },
      { id: 3, name: 'Mohan', location: 'Kedarnath', contact: '2222222222'  },
      { id: 4, name: 'Rohan', location: 'Badrinath', contact: '6666666666' },
      { id: 5, name: 'Sumit', location: 'Australia', contact: '9909999999'  },
      { id: 11, name: 'Aaron', location: 'Russia', contact: '0000000000'  },
      { id: 12, name: 'Steve', location: 'Kerala', contact: '1111111111'  },
      { id: 13, name: 'Manthan', location: 'Mohali', contact: '2222222222'  },
      { id: 14, name: 'Rohani', location: 'Rohant Pass', contact: '6666666666' },
      { id: 15, name: 'Sumeth', location: 'Mexico', contact: '9909999999'  },
      { id: 21, name: 'Rapheal', location: 'Canada', contact: '0000000000'  },
      { id: 22, name: 'Shiny', location: 'America', contact: '1111111111'  },
      { id: 23, name: 'Mary', location: 'Canada', contact: '2222222222'  },
      { id: 24, name: 'Britto', location: 'North Amercia', contact: '6666666666' },
      { id: 25, name: 'Sumitha', location: 'Greenland', contact: '9909999999'  }

    ]; 
    return {products};
  }
}
