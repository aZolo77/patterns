import { FormFieldDecorator } from './form-field-decorator';

export default class MaxLengthFiledDecorator extends FormFieldDecorator {
  constructor(formField, maxLength = 100) {
    super(formField);

    this.maxLength = maxLength;
    this.formField.element.setAttribute('maxlength', this.maxLength);
  }

  isValid() {
    return (
      super.isValid() && this.formField.element.value.length <= this.maxLength
    );
  }
}
