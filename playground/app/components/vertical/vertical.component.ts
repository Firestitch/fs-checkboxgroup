import { Component } from '@angular/core';

@Component({
  selector: 'vertical',
  templateUrl: 'vertical.component.html'
})
export class VerticalComponent {

  selected: any[] = [];

  items = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 }
    ];
}
