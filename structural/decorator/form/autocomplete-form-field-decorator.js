import { FormFieldDecorator } from './form-field-decorator';

export default class AutoCompleteFiledDecorator extends FormFieldDecorator {
  constructor(formField, autocomplete = 'on') {
    super(formField);

    this.autocomplete = autocomplete;
    this.formField.setAttribute('autocomplete', this.autocomplete);
  }
}
