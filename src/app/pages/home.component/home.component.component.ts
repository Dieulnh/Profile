import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'home-component',
  standalone: false,
  templateUrl: './home.component.component.html',
  styleUrls: ['./home.component.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  projects: any[] = [];
  education: any;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getUser().subscribe({
      next: (data) => {
        this.user = data.user;
        this.projects = data.projects;
      this.education = data.education;
        console.log('Dữ liệu nhận:', data);
      },
      error: (err) => {
        console.error('Lỗi khi tải dữ liệu:', err);
      }
    });
  }
}

