export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'radio' | 'email' | 'date' | 'file';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}
