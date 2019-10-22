// * Класс, создающий определённые объекты на основании каких-нибудь входных данных
// ? нужен для создания множества однотипных объектов (одна структура, разные данные)
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