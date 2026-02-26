import { Injectable } from '@nestjs/common';
// Class to represent generic account
export interface Account {
  id: number,
  name: string
}

// Dummy database
// Stores all created accounts
let dummy_data: Map<number, Account> = new Map<number, Account>();

// Keeps track of the next available ID
let id: number = 0

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  throwInputBack(name: string): string {
      return 'Hello ' + name;
  }

  getAllAccounts(): Array<string> {
    return Array.from(dummy_data.entries()).map(([key, value]) => { return `Account ID #${key}: ${value.name}`});
  }

  saveAccount(name: string): Account {
    let entry: Account = {id: id, name: name};
    dummy_data.set(id, entry);
    id += 1;
    return entry;
  }

  getAccount(id: number): Account | undefined {
    let result: Account | undefined = {id: -1, name: " "};

    for (const key of dummy_data.keys()) {
      if(key == id) {
        result = dummy_data.get(key);
      }
    }
    
    return result;
  }
}
