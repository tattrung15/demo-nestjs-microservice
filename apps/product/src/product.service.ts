import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getHello(): string {
    return 'This is product-service';
  }
}
