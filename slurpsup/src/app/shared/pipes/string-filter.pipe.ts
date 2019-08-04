import { Pipe, PipeTransform } from '@angular/core';
import { Juice } from '../models/Juice';

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

    /**
     * Transform is called every time the search pipe is triggered
     * it takes an array of all your leads and the query string
     */
    transform(value: Juice[], q: string) {

      if(!value){
          return value;
      }

      if (!q || q === '') {
          return value;
      }

      return value.filter(item => -1 < Math.max(
            item.name.toLowerCase().indexOf(q.toLowerCase())
          , item.reviewer.toLowerCase().indexOf(q.toLowerCase())));
      }
}
