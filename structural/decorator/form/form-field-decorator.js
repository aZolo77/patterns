export default class FormFieldDecorator {
  constructor(formField) {
    this.formField = formField;
  }

  isValid() {
    return this.formField.isValid();
  }
}
