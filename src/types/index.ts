export interface ITodo {
  userId: number;
  author: string;
  id: number;
  title: string;
  completed: boolean;
}

export interface Geolocation {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

