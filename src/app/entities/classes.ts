

export class User {
  constructor(public name: string, public email: string, public password: string, public id: string, public avatar: string) {
    
  }
}

export class Task {

  constructor(
    public id: string,
    public name: string,
    public priority: string,
    public description: string,
    public status: string,
  ) {
    
  }
}