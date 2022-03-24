//  Type Aliases

type Bird = {
  wings: 2;
  nozzle: 1;
}

type Sum = (x: number, y: number) => number;

type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
}

//  Type Unions

type StatesOfMatter = "liquid" | "solid" | "gaseous";

type IdentifyingDocument = string | number;

type SO = "linux" | "mac OS" | "windows";

type Vowels = "a"| "e" | "i" | "o" | "u";


// Class

class Dog {
  _name: string;
  _color: string
  _age: number;

  constructor(name: string, color: string, age: number) {
    this._name = name;
    this._color = color;
    this._age = age;
  }

  bark(): void {
    console.log("Au Au");
  }
}

class House {
  _owner: string;
  _address: string;
  _color: string;
  _area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this._owner = owner;
    this._address = address;
    this._color = color;
    this._area = area;
  }
}

class Flight {
  _origin: string;
  _destination: string;
  _departureDate: Date;
  _arrivalDate: Date;
  _passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this._origin = origin;
    this._destination = destination;
    this._departureDate = departureDate;
    this._arrivalDate = arrivalDate;
    this._passengers = passengers;
  }
}

// Interfaces

interface Automobile {
  name: string;
  maker: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

interface Aircraft {
  model: string;
  maker: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}