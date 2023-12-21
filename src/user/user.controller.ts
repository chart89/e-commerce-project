import { Controller, Get, Param, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/')
    getAll(): any {
      return this.userService.getAll();
    };

    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
      const user = await this.userService.getById(id);
      if (!user) throw new NotFoundException('User not found');
      return user;
    }

}
