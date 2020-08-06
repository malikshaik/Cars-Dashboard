import { Component, OnInit, Inject } from "@angular/core";
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: "app-details-dialog",
  templateUrl: "./details-dialog.component.html",
  styles: [
    `
      .mat-card-container {
        display: flex;
      }
      .car-image {
        width:400px;
        height:400px
      }
      .mat-dialog-actions {
        justify-content: flex-end;
      }
    `
  ]
})
export class DetailsDialogComponent {
  carDetail: any = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DetailsDialogComponent>
  ) {
  }

  ngOnInit(){
    if (this.data) {
      this.carDetail = this.data;
    }
  }

  onClose(): void {
    this.dialogRef.close(true);
  }
}
