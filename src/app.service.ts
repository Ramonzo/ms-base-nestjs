import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const response = {
      apiName: "ms_base",
      status: "Okay"   
    };
    return response;
  }
}
