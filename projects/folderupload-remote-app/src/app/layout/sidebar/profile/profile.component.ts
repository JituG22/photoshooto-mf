import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileImg = './assets/page/folder-upload/profile-img.png';
  userInfo = {
    img: './assets/page/folder-upload/profile-img.png',
    name: 'Rashmika Dixit',
    pid: 'PS22AMD478',
    type: 'Wedding Photographer',
    experience: '5',
    score: 69,
  };
}
