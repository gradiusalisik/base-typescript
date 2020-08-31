class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {} // Один в один с тем, что выше
}

//  Modificator ================================
// protect, public, private
class Animal {
  protected voice: string = ""; // может быть доступно в этом классе и для всех классов, которые наследуются
  public color: string = "black"; // можно не указывать, все по умолчанию public

  constructor() {
    this.go();
  }

  private go() {
    // Доступны только в том классе в котором определены.
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice;
  }
}

const cat = new Cat();
// cat.voice // error , потому что мы можем работать с ней только внутри класса, а не обращаться к нему после создания инстанса..

cat.setVoice("Test");
console.log(cat.color);

// абстрактные классы ====================================
// Они нужны на этапе разработки, чтобы от них наследоваться, а также там присутствуют абстрактные методы.
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "this is info";
  }
}
