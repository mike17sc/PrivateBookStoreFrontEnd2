import{Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class DataService {
  constructor() {
  }
  connected:String="false";
}
