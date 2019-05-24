
import { Controller, Get, Query, Post, Body, Res, HttpStatus, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { TestService } from './test.service';
import { CreateModel } from './interface/test.interface';


@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }
  // @Get("debug")
  // async findAll(@Res() res: Response) {
  //   console.log('Forbidden')
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

  // }


  @Get("debug")
  findAll() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, 403);
  }
  @Get('create')
  createGet(@Query() queryParams: CreateModel) {
    this.testService.calculate(queryParams);
    // http://localhost:3001/test/create?num=5
    return this.testService.result;
  }

  @Post("create")
  create(@Body() CreateModel: CreateModel, @Res() res: Response) {
    this.testService.calculate(CreateModel);
    res.json(this.testService.result);
  }
} 