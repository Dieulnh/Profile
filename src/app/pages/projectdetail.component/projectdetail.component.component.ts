import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'projectdetail.component',
  standalone: false,
  templateUrl: './projectdetail.component.component.html',
  styleUrl: './projectdetail.component.component.css'
})
export class ProjectdetailComponent implements OnInit {
  project: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

 ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('Project ID from URL:', id); 
  
  this.userService.getUser().subscribe({
    next: (data) => {
      console.log('User data:', data);
      
      if (!data || !data.projects) {
        console.error('Không có projects trong dữ liệu API!');
        return;
      }

      this.project = data.projects.find((p: any) => p._id == id);
      console.log('Project found:', this.project);
    },
    error: (err) => {
      console.error('Lỗi khi tải dữ liệu:', err);
    }
  });
}
}

