import { Controller, Get, Post } from '@nestjs/common';

@Controller('movies')
export class MovieReviewController {
  @Post(':id/reviews')
  createReview() {}

  @Get(':id/reviews')
  getReviewsByMovieId() {}
}
