import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './schema/activity.schema';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get()
  async getAllBooks(): Promise<Activity[]> {
    return this.activityService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    activity,
  ): Promise<Activity> {
    return this.activityService.create(activity);
  }
}
