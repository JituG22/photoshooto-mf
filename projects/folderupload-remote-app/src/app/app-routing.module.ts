import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderUploadComponent } from './folder-upload/folder-upload.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder-upload',
    pathMatch: 'full',
  },
  {
    path: 'folder-upload',
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
