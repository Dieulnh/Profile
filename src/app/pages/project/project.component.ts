import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
 user = {
  name: "Hien Dieu",
  age: 20,
   address: "Lien Chieu, Da Nang",
  phone: "+84 916 452 436",
  email: "dieulnhpd10372@gmail.com",
      about: 'I am an experienced programmer and tester....',
    image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/483485930_3759459901030966_8215896512789566955_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tsFoPPVOXIcQ7kNvwHeHcsm&_nc_oc=AdkOuoZXdIGXw-BvjsTNXkng6czpHO7_nGza0_LcprDuF8k1OFQvDA598oy6qgzgOtU_vhKOOI_Xm0F_b4R8703v&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=5KaWWARiXNsl_PxnvvIPrw&oh=00_AfE0RD5_z7TySBQ0kvKuYAiA5A3bglRahrriiFvgmz47SA&oe=6802E518',
    cvLink: 'https://www.canva.com/design/DAGhaFmj9OY/mH4RdCigD55fAVxmYUftTg/edit'

};projects: any;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects
    this.projectService.getProjects().subscribe({
    next: (response) => {
      this.projects = response as any;
    },
    error: (error) => {
      console.error('Lỗi chi tiết:', error);
      this.projects = [];
    },
    complete: () => {
      console.log("get thanh cong");
    }
  });
  }
}
