import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.findAll();
  }

  @Get('student/:id')
  findOne(@Param('id') id) {
    return this.appService.findOne(id);
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Delete('student/delete/:id')
  delete(@Param('id') id) {
    return this.appService.deleteOne(id);
  }

  @Post('student/add')
  create(@Body() student) {
    return this.appService.create(student);
  }

  @Put('student/update/:id')
  update(@Param('id') id, @Body() student) {
    return this.appService.update(id, student);
  }
}
