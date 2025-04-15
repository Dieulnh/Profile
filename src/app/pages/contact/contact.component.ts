import { Component } from '@angular/core';
import {ContactForm} from'./InterfaceContact'

import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { EmailService } from '../../services/email.service'
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
formData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    purpose: 'freelancer'
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private emailService: EmailService) {}

  submitForm(form: NgForm) {
    if (!this.formData.firstName || !this.formData.lastName || !this.formData.email || !this.formData.message) {
    this.errorMessage = 'Vui lòng điền đầy đủ thông tin';
    return;
  }

  this.isLoading = true;
  this.errorMessage = '';
  this.successMessage = '';

  this.emailService.sendEmail(this.formData).subscribe({
    next: (response) => {
      this.successMessage = 'Gửi liên hệ thành công!';
    },
    error: (error) => {

      this.errorMessage = error.message || 'Có lỗi xảy ra khi gửi liên hệ';
      console.error('Lỗi chi tiết:', error);
    },
    complete: () => {
      this.isLoading = false;
    }
  });
  }
}

















