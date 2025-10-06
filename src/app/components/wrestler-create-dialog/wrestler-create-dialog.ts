import { Component } from '@angular/core';
import { WrestlerService } from '../../services/wrestler';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Wrestler } from '../../models/wrestler';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-wrestler-create-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormField, MatLabel, MatInput, MatButton, FormsModule],
  templateUrl: './wrestler-create-dialog.html',
  styleUrl: './wrestler-create-dialog.css',
})
export class WrestlerCreateDialog {
  constructor(
    private wrestlerService: WrestlerService,
    public dialogRef: MatDialogRef<WrestlerCreateDialog>,
  ) {}

  newWrestler: Partial<Wrestler> = {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.wrestlerService.createWrestler(this.newWrestler).subscribe({
      next: (createdWrestler) => {
        console.log("Criado", createdWrestler)
        this.dialogRef.close(true)
      },
      error: (error) => {
          console.log(error)
      },
    })
  }
}
