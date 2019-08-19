import { Component, Inject } from "@angular/core";
import { CustomerDetailsComponent} from '../Customer/customer-details.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-Component',
    templateUrl: './dialog.component.html'
})
export class DialogComponet{
    constructor(
        
        public dialogRef: MatDialogRef<CustomerDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
           
        }
    
      onNoClick(): void {
        this.data = {Name : "Amit", Animal : "Dog"}; 
        this.dialogRef.close();
      }
    
}