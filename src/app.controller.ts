import { Controller, All, HttpCode, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All()
  get(@Req() request: Request): string {
    return this.appService.getHello();
  }
}
