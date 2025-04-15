import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { FormField } from '../../models/field.model';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {
  dynamicForm!: FormGroup;
  formFields: FormField[] = [];

  constructor(private fb: FormBuilder, private formService: FormService) {}

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({});
    this.formFields = this.formService.getFields();

    this.formFields.forEach((field) => {
      const validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.type === 'email') validators.push(Validators.email);
      const control = this.fb.control('', validators);
      this.dynamicForm.addControl(field.id, control);
    });
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      console.log('Form Data:', this.dynamicForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the form errors before submitting.');
    }
  }
}
