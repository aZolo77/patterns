// * Класс, создающий определённые объекты на основании каких-нибудь входных данных
// ? нужен для создания множества однотипных объектов (одна структура, разные данные)
// - пример с подпиской
{
  class SimpleMembership {
    constructor(name) {
      this.name = name;
      this.cost = 50;
    }
  }

  class StandartMembership {
    constructor(name) {
      this.name = name;
      this.cost = 150;
    }
  }
  class PremiumMembership {
    constructor(name) {
      this.name = name;
      this.cost = 500;
    }
  }

  class MembershipFactory {
    static list = {
      simple: SimpleMembership,
      standard: StandartMembership,
      premium: PremiumMembership
    };

    create(name, type = 'simple') {
      const Membership = MembershipFactory.list[type];
      const member = new Membership(name);

      // ? здесь можно добавить функционал
      member.type = type;
      member.define = function() {
        console.log(`${this.name} (${this.type}): ${this.cost}`);
      };
      return member;
    }
  }

  const factory = new MembershipFactory();
  const members = [
    factory.create('Zollo', 'simple'),
    factory.create('Feth', 'premium'),
    factory.create('Apollo', 'standard'),
    factory.create('Venus')
  ];

  members.forEach(m => {
    m.define();
  });
}

// - пример с машиной
{
  // * Класс конструктор
  class Bmw {
    constructor(model, price, maxSpeed) {
      this.model = model;
      this.price = price;
      this.maxSpeed = maxSpeed;
    }
  }

  class BmwFactory {
    create(type) {
      switch (type) {
        case 'X5':
          return new Bmw(type, 108000, 300);
        case 'X6':
          return new Bmw(type, 111000, 320);
      }
    }
  }

  const factory = new BmwFactory();
  const x5 = factory.create('X5');
  const x6 = factory.create('X6');
}
