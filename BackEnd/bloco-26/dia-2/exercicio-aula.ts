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