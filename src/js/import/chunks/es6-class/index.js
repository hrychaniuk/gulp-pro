class User {
  static _instance = null;

  constructor({ name, surname }) {
    if (User._instance) return User._instance;
    this.name = name;
    this.surname = surname;

    User._instance = this;
  }

  get fullname() {
    return `${this.name} ${this.surname}`;
  }
}

export { User };
