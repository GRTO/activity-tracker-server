import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { Activity } from './schema/activity.schema';
import { CreateActivityDTO } from './dto/create-activity.dto';
import { UpdateActivityDTO } from './dto/uypdate-activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get()
  async getAllActivities(): Promise<Activity[]> {
    return this.activityService.findAll();
  }

  @Post()
  async createActivity(
    @Body()
    activity: CreateActivityDTO,
  ): Promise<Activity> {
    return this.activityService.create(activity);
  }

  @Get(":id")
  async getActivity(
    @Param("id")
    id: string,
  ): Promise<Activity> {
    return this.activityService.findById(id);
  }

  @Put(":id")
  async updateActivity(
    @Param("id")
    id: string,
    @Body()
    activity: UpdateActivityDTO,
  ): Promise<Activity> {
    return this.activityService.updateById(id, activity);
  }

  @Delete(":id")
  async deleteActivity(
    @Param("id")
    id: string,
  ): Promise<Activity> {
    return this.activityService.deleteById(id);
  }
}
