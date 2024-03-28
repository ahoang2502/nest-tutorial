import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'fetch song based on Id';
  }

  @Put(':id')
  update() {
    return 'update song based on Id';
  }

  @Delete(':id')
  delete() {
    return 'delete song based on Id';
  }
}
