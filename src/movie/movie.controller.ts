import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MovieController {
  @Post()
  createMovie() {}

  @Get()
  getMovies() {}

  @Get(':id')
  getMovieById() {}

  @Patch(':id')
  updateMovie() {}

  @Patch(':id/poster')
  uploadPoster() {}

  @Delete(':id')
  deleteMovie() {}
}
