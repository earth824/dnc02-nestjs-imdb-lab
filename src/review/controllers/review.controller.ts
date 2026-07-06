import { Controller, Patch } from '@nestjs/common';

@Controller('reviews')
export class ReviewController {
  @Patch(':id')
  updateReview() {}

  @Patch(':id/disable')
  disableReview() {}
}
