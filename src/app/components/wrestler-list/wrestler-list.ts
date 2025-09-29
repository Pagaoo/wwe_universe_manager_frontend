import { Component, OnInit } from '@angular/core';
import { Wrestler } from '../../models/wrestler';
import { WrestlerService } from '../../services/wrestler';
import { MatDialog } from '@angular/material/dialog';
import { WrestlerEditDialog } from '../wrestler-edit-dialog/wrestler-edit-dialog';

@Component({
  selector: 'app-wrestler-list',
  standalone: true,
  templateUrl: './wrestler-list.html',
  styleUrl: './wrestler-list.css',
  imports: []
})
export class WrestlerListComponent implements OnInit{
  wrestlers: Wrestler[] = []
  isLoading = true

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
        this.wrestlerService.saveEditWrestler(result.id, wrestler, result).subscribe({
          next: (res) => {
            const index = this.wrestlers.findIndex(wrestler => wrestler.id === res.id)
            if(index !== -1) this.wrestlers[index] = res
          },
          error: (error) => console.log(error)
        })
      }
    })
  }
}
