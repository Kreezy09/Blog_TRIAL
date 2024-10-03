import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Required for standalone components

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet], // Make sure RouterModule is imported
})
export class AppComponent {}
