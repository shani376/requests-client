import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.html',
  imports: [ReactiveFormsModule, NgIf]
})
export class RequestFormComponent {
  requestForm: FormGroup;

  constructor(private fb: FormBuilder, private requestService: RequestService, private router: Router) {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      content: ['']
    });
  }

  submitForm() {
    if (this.requestForm.invalid) return;

    this.requestService.addRequest(this.requestForm.value).subscribe(() => {
      this.requestForm.reset();
      alert('הפנייה נשלחה בהצלחה!');
    });
  }
}
