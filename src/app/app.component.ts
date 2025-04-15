import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service'; 
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Web miền';

  user = {
    name: 'Phạm Văn Miền',
    bio: 'Web Development',
    student: 'FPT Polytechnic',
    about: 'Lập trình viên Frontend, yêu thích công nghệ',
    avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4'
  };

  projects = [
    {
      _id: '1',
      title: 'Website Portfolio',
      description: 'Xây dựng portfolio cá nhân với Angular và Tailwind CSS.',
      image: 'https://dac.digital/wp-content/uploads/2023/05/angular-logo-1-optimized.png'
    },
    {
      _id: '2',
      title: 'Ứng dụng Quản lý Công việc',
      description: 'Ứng dụng giúp quản lý công việc cá nhân và nhóm.',
      image: 'https://itech.edu.vn/wp-content/uploads/2024/06/php-programming-language.jpg'
    }
  ];

  constructor(private router: Router, private sharedService: SharedService) {}

goToHome() {
  console.log("User chuẩn bị set:", this.user);
  console.log("Projects chuẩn bị set:", this.projects);

 this.router.navigate(['/home'], {
  state: {
    homeName: 'Miền đẹp trai',
    homeBio: 'Web Developer',
    homeStudent: 'DUT',
    homeAbout: 'Yêu thiết kế và dev',
    homeAvatar: 'link_ảnh_avatar',
    projects: [
      {
        _id: '1',
        title: 'Project A',
        description: 'Mô tả A',
        image: 'link_ảnh_A'
      },
      {
        _id: '2',
        title: 'Project B',
        description: 'Mô tả B',
        image: 'link_ảnh_B'
      }
    ]
  }
});
}
}
