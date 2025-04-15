import { Component  ,OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit  {
 user = {
  name: "Hien Dieu",
  age: 20,
   address: "Lien Chieu, Da Nang",
  phone: "+84 916 452 436",
  email: "dieulnhpd10372@gmail.com",
      about: 'I am an experienced programmer and tester....',
    image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/483485930_3759459901030966_8215896512789566955_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tsFoPPVOXIcQ7kNvwHeHcsm&_nc_oc=AdkOuoZXdIGXw-BvjsTNXkng6czpHO7_nGza0_LcprDuF8k1OFQvDA598oy6qgzgOtU_vhKOOI_Xm0F_b4R8703v&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=5KaWWARiXNsl_PxnvvIPrw&oh=00_AfE0RD5_z7TySBQ0kvKuYAiA5A3bglRahrriiFvgmz47SA&oe=6802E518',
    cvLink: 'https://www.canva.com/design/DAGhaFmj9OY/mH4RdCigD55fAVxmYUftTg/edit'

};
;
  projects: any[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getUser().subscribe({
      next: (data) => {
        this.user = data.user;
        this.projects = data.projects;
        console.log('Dữ liệu nhận:', data);
      },
      error: (err) => {
        console.error('Lỗi khi tải dữ liệu:', err);
      }
    });
  }
}
