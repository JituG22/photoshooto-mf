import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHostComponent } from './home-host/home-host.component';

const routes: Routes = [
  { path: '', component: HomeHostComponent, pathMatch: 'full' },
  {
    path: 'folder-upload',
    loadChildren: () =>
      import('folderupload-remote-app/FolderUploadModule').then(
        (m) => m.FolderUploadModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
