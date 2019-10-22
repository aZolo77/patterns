class Element {
  constructor() {}
}

class Text extends Element {
  constructor() {
    super();
  }
}

class Paragraph extends Text {
  constructor(text) {
    super();
    this.text = text;
  }

  // для каждого класса создаём метод, через который Посетитель получает доступ к данному классу
  accept(visitor) {
    visitor.visitParagraph(this);
  }
}

class List extends Text {
  constructor(...items) {
    super();
    this.items = items;
  }

  // для каждого класса создаём метод, через который Посетитель получает доступ к данному классу
  accept(visitor) {
    visitor.visitList(this);
  }
}

class ListItem extends Text {
  constructor(text) {
    super();
    this.text = text;
  }

  // для каждого класса создаём метод, через который Посетитель получает доступ к данному классу
  accept(visitor) {
    visitor.visitListItem(this);
  }
}

module.exports = { Paragraph, List, ListItem };
