// * Одиночка - гарантия того, что все будущие объекты будут иметь ссылку на единственный экземпляр данного класса

// вариант 1
{
    const Singl_tone = {
        foo: 123,
        getInstance() {
            return this;
        }
    };

    let obj_1 = Singl_tone.getInstance();
    let obj_2 = Singl_tone.getInstance();

    console.log(obj_1 === obj_2);
}

// вариант 2
{
    // ? любой объект, созданный при помощи конструктора Counter будет получать ссылку на instance
    class Counter {
        constructor() {
            if (typeof Counter.instance === 'object') return Counter.instance;
            this.count = 0;
            Counter.instance = this;
            return this;
        }

        getCount() {
            return instance.count;
        }

        increaseCount() {
            return instance.count++;
        }
    }
    
    let myCount1 = new Counter();
    let myCount2 = new Counter();

    myCount1.increaseCount();
    myCount1.increaseCount();
    myCount2.increaseCount();
    myCount2.increaseCount();

    console.log(myCount1.getCount()); // 4
    console.log(myCount2.getCount()); // 4
    
}
// вариант 3
{
    function Singltone() {
        if (Singltone.instance) return Singltone.instance;

        this.foo = 123;
        return Singltone.instance = this;
    }

    let obj1 = Singltone();
    let obj2 = Singltone();

    console.log(obj1 === obj2);
}