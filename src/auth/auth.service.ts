import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup(dto: AuthDto) {
    return {
      msg: 'I am signed up',
      dto,
    };
  }

  signin() {
    return { msg: 'I am signed in' };
  }
}
