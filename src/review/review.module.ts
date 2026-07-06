import { Module } from '@nestjs/common';
import { ReviewController } from './controllers/review.controller';
import { MovieReviewController } from './controllers/movie-review.controller';

@Module({
  controllers: [ReviewController, MovieReviewController]
})
export class ReviewModule {}
