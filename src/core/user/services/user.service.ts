import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/infrastructure/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create() {}
}
