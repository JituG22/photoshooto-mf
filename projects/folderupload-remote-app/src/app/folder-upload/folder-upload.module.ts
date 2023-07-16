import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderUploadComponent } from './folder-upload.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { TopnavComponent } from '../layout/topnav/topnav.component';
import { LogoComponent } from '../layout/topnav/logo/logo.component';
import { NavComponent } from '../layout/topnav/nav/nav.component';
import { UserComponent } from '../layout/topnav/user/user.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { ProfileComponent } from '../layout/sidebar/profile/profile.component';
import { NavLinksComponent } from '../layout/sidebar/nav-links/nav-links.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ConetntAreaComponent } from '../layout/conetnt-area/conetnt-area.component';
import { NoEventComponent } from '../ui/no-event/no-event.component';
LayoutComponent;
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    LogoComponent,
    NavComponent,
    UserComponent,
    SidebarComponent,
    ProfileComponent,
    NavLinksComponent,
    ConetntAreaComponent,
    NoEventComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatProgressBarModule,
  ],
})
export class FolderUploadModule {}
