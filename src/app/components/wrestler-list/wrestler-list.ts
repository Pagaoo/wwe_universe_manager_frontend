import { Component, OnInit } from '@angular/core';
import { Wrestler } from '../../models/wrestler';
import { WrestlerService } from '../../services/wrestler';
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-wrestler-list',
  standalone: true,
  templateUrl: './wrestler-list.html',
  styleUrl: './wrestler-list.css',
  imports: [NgIf, NgForOf]
})
export class WrestlerListComponent implements OnInit{
  wrestlers: Wrestler[] = []
  isLoading = true

  constructor(private wrestlerService: WrestlerService) {}

  ngOnInit(): void {
      this.wrestlerService.wrestlersList().subscribe(data => {
        this.wrestlers = data
        this.isLoading = false
      })
  }
}
