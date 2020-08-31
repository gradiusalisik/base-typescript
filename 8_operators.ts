interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = "name";
key = "age";

// key = 'job' // error Потмоу что ключи содержать только 'name' | 'age'

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; // 'name' | 'email' Исключает нужные ключи

type UserKeysNoMeta2 = Pick<User, "name" | "email">; // Включает нужные ключи.

let u1: UserKeysNoMeta1 = "name";

// u1 = "_id"; // error , because only 'name' | 'email'
