import { Component, Inject } from '@angular/core';
import { Wrestler } from '../../models/wrestler';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatDialogTitle, MatDialogContent } from "@angular/material/dialog";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { WrestlerService } from '../../services/wrestler';
import { buildJsonPatch } from '../../utils/buildJsonPatch';

@Component({
  selector: 'app-wrestler-edit-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './wrestler-edit-dialog.html',
  styleUrl: './wrestler-edit-dialog.css',
})
export class WrestlerEditDialog {
  private originalData!: Wrestler

  constructor(public dialogRef: MatDialogRef<WrestlerEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Wrestler,
    private wrestlerService: WrestlerService
  ) {}

  ngOnInit(): void {
    this.originalData = { ...this.data }
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  onSaveClick(): void {
    this.wrestlerService.updateWrestler(this.originalData.id, this.originalData, this.data)
    .subscribe({
      next: () => {
        this.dialogRef.close(true)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
