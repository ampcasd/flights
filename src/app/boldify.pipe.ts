import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldify'
})

export class BoldifyPipe implements PipeTransform {

transform(row: string, inputValue: string): any {
    return row.replace(inputValue, '<strong>' + inputValue + '</strong>');
  }
}
