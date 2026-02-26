import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { AppService} from './app.service';
import type {Account} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('account')
  getAllAccounts(): string[] {
    return this.appService.getAllAccounts();
  }

  @Post('account')
  saveAccount(@Req() input: Request): Account {
    return this.appService.saveAccount(input.body['name'])
  }

  @Get('account/:id')
  getAccount(@Param('id') id: number): Account | undefined {
    return this.appService.getAccount(id);
  }

}
