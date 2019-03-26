# angular-custom-dropdown
A free reusable dropdown component for Angular 4 and above

Do you want to quickly setup a dropdown list with dynamic data, optional checkbox to make your UI look better ? The angular-custom-dropdown is the one you should consider! 

## Inclusion in your project

The installation or inclusion of the custom dropdown component has been kept simple. All you have to do is
1. Download the folder 'custom-dropdown-component' and inlcude it along with your other angular components.
2. Import the component (custom-dropdown.component) in your parent module or whichever your prefer, and add the component to the declarations section.

For example,
```
// Other component imports
import CustomDropdownComponent from './components/custom-dropdown-component/custom-dropdown.component';

delcarations : [
  // Other component delcarations
  CustomDropdownComponent
]
```

## Usage

```
In the html section of the component where you want the custom dropdown to be placed

  <custom-dropdown-component [data]="dataList" [keyName]="key" [defaultTitle]="selectText" [showCheckBox]="true"
    [selectedItem]="selectedItem" (itemSelected)="itemChanged($event)">
  </custom-dropdown-component>
  
  * 'showCheckbox' is a boolean which will decide whether to display a checkbox for every item or not.
  
In the component's typescript, you could have the following corresponding to the attributes used in the above html

dataList = [
  {
    id: 1,
    name: 'Item 1'
  },
  {
    id: 2,
    name: 'Item 2'
  }
];

key = 'name' // Name of the key to be used to identify the attribute using which the item's text should be displayed.

defaultTitle = 'Select'; // Default text to be shown when no items are selected.

selectedItem = null // No item would be selected by default
OR
selectedItem = {
  id: 1,
  name: 'Item 1',
  isSelected: true
};
// This will keep the first item ('Item 1') selected by default.

itemChanged(e: {id: number, <keyName>: string}): void {
  // The item which was selected/unselected will be available here. 'id' will have the value of the selected item or 0 if the item was deselected. <keyName> should be set as per the key declared above. It will be 'name' in this example.
}

```
