// Декоратор используется, когда нужно избежать наследования и добавить обязанности объектам налету (не во время компиляции, а во время работы программы) в любом порядке

//=================================================================================================
import { FormField } from './form-field';
import { MaxLengthFiledDecorator } from './maxlength-form-field-decorator';
import { AutoCompleteFiledDecorator } from './autocomplete-form-field-decorator';

const form = document.createElement('form');

let formField = new FormField();

formField = new MaxLengthFiledDecorator(formField, 255);
formField = new AutoCompleteFiledDecorator(formField, 'off');

form.appendChild(formField.element);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (formField.isValid()) {
    form.submit();
  } else {
    alert('Please correct the issues in the form field');
  }
});

document.body.appendChild(form);
