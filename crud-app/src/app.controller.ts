import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import type { Request } from 'express';
import { AppService} from './app.service';
import type {Account} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Base local server: http://localhost:3000/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // http://localhost:3000/account
  @Get('account')
  getAllAccounts(): string[] {
    return this.appService.getAllAccounts();
  }

  // http://localhost:3000/account
  @Post('account')
  saveAccount(@Req() input: Request): Account {
    return this.appService.saveAccount(input.body['name'])
  }

  // http://localhost:3000/account/(id_here)
  @Get('account/:id')
  getAccount(@Param('id') id: number): Account | undefined {
    return this.appService.getAccount(id);
  }

  // http://localhost:3000/account/(id_here)
  @Put('account/:id')
  updateAccount(@Param('id') id: number, @Req() input: Request): Account | string {
    return this.appService.updateAccount(input.body['name'], id);
  }

  // http://localhost:3000/account/(id_here)
  @Delete('account/:id')
  deleteAccount(@Param('id') id: number): string {
    return this.appService.deleteAccount(id);
  }

}
