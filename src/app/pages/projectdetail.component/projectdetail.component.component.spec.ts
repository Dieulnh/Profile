import { Component } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './projectdetail.component.component.html',
  styleUrls: ['./projectdetail.component.component.css']
})
export class ProjectdetailComponent {
  project = {
    title: "Website Bán Hàng",
    description: "Đây là một dự án phát triển website bán hàng sử dụng Angular và Firebase.",
    image: "assets/images/project-main.jpg",
    imageproject: [
      "project-1.jpg",
      "project-2.jpg",
      "project-3.jpg"
    ],
    techStack: ["Angular", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "#"
  };

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true
  };
}
