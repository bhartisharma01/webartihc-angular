import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';  
import { RouterModule } from '@angular/router'; 

export type MenuItems={
  icon:string;
  label:string;
  route: string;
  
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, RouterModule],  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  sidenavCollapsed = signal(false);
  @Input() set collapsed(val:boolean){
    this.sidenavCollapsed.set(val)
  }
  
  menuItems = signal<MenuItems[]>([
    {
      icon:'dashboard',
      label:'Dashboard',
      route:'dashboard'
    },
    {
      icon:'class',
      label:'Add Class',
      route:'add-class'
    },
    {
      icon:'people',
      label:'Register Students',
      route:'register-students'
    },
    {
      icon:'announcement',
      label:'Announcements',
      route:'announcements',
    },
    {
      icon:'upload',
      label:'Upload',
      route:'upload'
    },
    {
      icon:'assignment',
      label:'Student Work',
      route:'student-work'
    },
    {
      icon:'upload',
      label:'Previous Uploads',
      route:'previous-upload'
    },
    {
      icon:'analytics',
      label:'Reports',
      route:'reports'
    },
    {
      icon:'assignment',
      label:'Tests',
      route:'tests'
    }
  ])


}


