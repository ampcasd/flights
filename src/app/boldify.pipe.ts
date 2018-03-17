import {Pipe, PipeTransform, Sanitizer} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'boldify'
})

export class BoldifyPipe implements PipeTransform {

transform(row: string, inputValue: string): any {
    return row.replace(inputValue, '<strong>' + inputValue + '</strong>');
    // return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}

// const matchingLength = row.slice(0, inputValue.length).length;
// return '<b>' + row.slice(0, matchingLength) + '</b>' + row.slice(matchingLength);
