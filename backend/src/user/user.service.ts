import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  users: CreateUserDto[] = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return this.users;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    const found_user = this.users.find((user) => user.id === id);
    if (!found_user) {
      return `User with id ${id} not found`;
    };

    return found_user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
