// Посетитель позволяет добавлять в программу новые операции, не изменяя классы объектов, над которыми эти операции могут выполняться

// ================================================================================================================
class ElementHtmlVisitor {
  constructor() {
    this.result = '';
  }

  visitParagraph(p) {
    this.result += `<p>${p.text}</p>`;
  }

  visitList(list) {
    this.result += '<ul>';

    for (let item of list.items) {
      item.accept(this);
    }

    this.result += '</ul>';
  }

  visitListItem(item) {
    this.result += `<li>${item.text}</li>`;
  }
}

module.exports = ElementHtmlVisitor;
