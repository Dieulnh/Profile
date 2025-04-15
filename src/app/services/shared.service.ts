import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private user: any;
  private projects: any[] = [];

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setProjects(projects: any[]) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }
}
