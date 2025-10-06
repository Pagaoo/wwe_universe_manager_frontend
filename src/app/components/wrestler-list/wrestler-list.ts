import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Wrestler } from '../../models/wrestler';
import { WrestlerService } from '../../services/wrestler';
import { MatDialog } from '@angular/material/dialog';
import { WrestlerEditDialog } from '../wrestler-edit-dialog/wrestler-edit-dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WrestlerCreateDialog } from '../wrestler-create-dialog/wrestler-create-dialog';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-wrestler-list',
  standalone: true,
  templateUrl: './wrestler-list.html',
  styleUrl: './wrestler-list.css',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    DatePipe,
    MatPaginatorModule,
    MatCardModule,
    DecimalPipe
  ],
})
export class WrestlerListComponent implements OnInit {
  dataSource = new MatTableDataSource<Wrestler>();
  //wrestlers: Wrestler[] = [];
  isLoading = true;

  displayedColumns: string[] = [
    'name',
    'weightInKg',
    'heightInCm',
    'heightFormatted',
    'birthDate',
    'age',
    'actions',
  ];

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  constructor(private wrestlerService: WrestlerService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadWrestlers();
  }

  loadWrestlers(): void {
    this.isLoading = true;
    this.wrestlerService.listWrestlers().subscribe((data) => {
      this.dataSource.data = data;
      this.isLoading = false;
    });
  }

  openEditDialog(wrestler: Wrestler): void {
    const dialogRef = this.dialog.open(WrestlerEditDialog, {
      width: '500px',
      data: { ...wrestler }, //copiando wrestler com o ...
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadWrestlers();
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(WrestlerCreateDialog, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadWrestlers();
      }
    });
  }

  onDeleteClick(wrestler: Wrestler): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      data: { message: `Are you sure you want to delete ${wrestler.name}` },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.wrestlerService.deleteWrestler(wrestler.id).subscribe({
          next: () => {
            console.log('Deletado com sucesso');
            this.loadWrestlers();
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    });
  }
}
