import { Component, computed, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';  
import { RouterModule } from '@angular/router'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatIconModule, RouterModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  collapsed = signal(false)
  sidenavWidth = computed(()=> this.collapsed() ? "55px" : "250px")
}
