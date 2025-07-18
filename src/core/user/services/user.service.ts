import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/libs/admin-access-control/infrastructure/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create() {}
}
