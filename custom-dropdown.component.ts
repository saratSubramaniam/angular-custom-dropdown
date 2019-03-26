import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'custom-dropdown-component',
  templateUrl: `./custom-dropdown.component.html`,
  styleUrls: ['./custom-dropdown.component.css']
})

export class CustomDropdownComponent {
  @Input('data') data: Array<any>;
  @Input('defaultTitle') defaultTitle: string;
  @Input('keyName') keyName: string;
  @Input('showCheckBox') showCheckBox: boolean;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  @Input('selectedItem') selectedItem: any;
  showMenuItems = false;

  selectItem(currentItem: any): void {
    this.showMenuItems = false;
    this.data.filter(
      (item: any) => {
        if (currentItem != item) item.isSelected = false;
      }
    );

    currentItem.isSelected = !currentItem.isSelected;

    this.selectedItem = currentItem.isSelected ? currentItem : null;

    this.itemSelected.emit({ id: currentItem.isSelected ? currentItem.id : 0, [this.keyName]: currentItem[this.keyName] });
  }
}