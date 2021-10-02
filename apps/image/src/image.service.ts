import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
  getHello(): string {
    return 'This is image-service';
  }
}
