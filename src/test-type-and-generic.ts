let a: number;
let b: number;
let c: string;
let d: Array<string>;

interface User<T = boolean> {
  firstName: string;
  lastName: string;
  isAdmin: T;
  permissions?: string[];
}

const user1: User = {
  firstName: 'Promise',
  lastName: 'Umeh',
  isAdmin: true,
};

const user2: User<number> = {
  firstName: 'Promise',
  lastName: 'Umeh',
  isAdmin: 1,
};

let usersArray: User[] = [user1, user1];

function getFirstMember<T>(arr: T[]): T {
  return arr[0];
}

getFirstMember<User>(usersArray);

type MathFunc = (a: number, b: number) => number;

const multiply: MathFunc = (a, b) => {
  return a * b;
};

multiply(10, 2);

const add: MathFunc = (a, b) => {
  return a + b;
};

/** */
