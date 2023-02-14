import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Ablak } from './ablak.entity';
import { AppService } from './app.service';
import newAblakDTO from './newablak.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/ablak')
  async listAblak() {
    const repo = this.dataSource.getRepository(Ablak);
    return await repo.find();
  }

  @Post('/ablak')
  async postAblak(@Body() ablak: newAblakDTO) {
    const Repo = this.dataSource.getRepository(Ablak);
    await Repo.save(ablak);
  }

  @Delete('/ablak/:id')
  async deleteAblak(@Param('id') id: number) {
    const Repo = this.dataSource.getRepository(Ablak);
    await Repo.delete(id);
  }
}
