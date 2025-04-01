import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { RegisterStudentsComponent } from './pages/register-students/register-students.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'add-class',
        component:AddClassComponent
    },
    {
        path:'register-students',
        component:RegisterStudentsComponent
    },
    {
        path:'announcements',
        component:AnnouncementsComponent
    },
    {
        path:'upload',
        component:AnnouncementsComponent
    },
    {
        path:'student-work',
        component:AnnouncementsComponent
    },
    {
        path:'previous-upload',
        component:AnnouncementsComponent
    },
    {
        path:'reports',
        component:AnnouncementsComponent
    },
    {
        path:'tests',
        component:AnnouncementsComponent
    }
];
