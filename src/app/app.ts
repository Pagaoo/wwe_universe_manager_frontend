import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WrestlerListComponent } from "./components/wrestler-list/wrestler-list";

@Component({
  selector: 'app-root',
  imports: [WrestlerListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wwe_universe_frontend');
}
