import { Component, OnInit } from '@angular/core';
import { Wrestler } from '../../models/wrestler';
import { WrestlerService } from '../../services/wrestler';
import { MatDialog } from '@angular/material/dialog';
import { WrestlerEditDialog } from '../wrestler-edit-dialog/wrestler-edit-dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wrestler-list',
  standalone: true,
  templateUrl: './wrestler-list.html',
  styleUrl: './wrestler-list.css',
  imports: [MatTableModule, MatButtonModule, MatIconModule]
})
export class WrestlerListComponent implements OnInit{
  wrestlers: Wrestler[] = []
  isLoading = true

  displayedColumns: string[] = ["name", "weight", "height", "age", "actions"]

  constructor(private wrestlerService: WrestlerService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadWrestlers()
  }

  loadWrestlers(): void {
    this.isLoading = true
    this.wrestlerService.listWrestlers().subscribe(data => {
      this.wrestlers = data
      this.isLoading = false
    })
  }

  openEditDialog(wrestler: Wrestler): void {
    const dialogRef = this.dialog.open(WrestlerEditDialog, {
      width: "500px",
      data: { ...wrestler } //copiando wrestler com o ...
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadWrestlers()
      }
    })
  }
}
