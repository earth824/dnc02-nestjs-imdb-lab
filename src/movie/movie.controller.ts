import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Controller('movies')
export class MovieController {
  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    console.log(createMovieDto);
  }

  @Get()
  getMovies() {}

  @Get(':id')
  getMovieById() {}

  @Patch(':id')
  updateMovie(@Body() updateMovieDto: UpdateMovieDto) {
    console.log(updateMovieDto);
  }

  @Patch(':id/poster')
  uploadPoster() {}

  @Delete(':id')
  deleteMovie() {}
}
