import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  stats?: any;
  isLoading = false;

  ngOnInit(): void {
    this.stats = {
      totalWrestlers: 52,
      totalShows: 2,
      totalTitles: 4,
      currentChampions: [
        { titleName: 'WWE Championship', championsName: ['Cody Rhodes'] },
        { titleName: 'World Heavywight Championship', championsName: ['Seth Rollins'] },
      ],
    };
  }
}
