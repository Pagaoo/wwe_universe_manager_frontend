import { Component, Inject } from '@angular/core';
import { Wrestler } from '../../models/wrestler';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatDialogTitle, MatDialogContent } from "@angular/material/dialog";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-wrestler-edit-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './wrestler-edit-dialog.html',
  styleUrl: './wrestler-edit-dialog.css',
})
export class WrestlerEditDialog {
  constructor(public dialogRef: MatDialogRef<WrestlerEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Wrestler
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data)
  }
}
