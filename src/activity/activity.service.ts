import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Activity } from './schema/activity.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity.name)
    private activityModel: mongoose.Model<Activity>,
  ) {}

  async findAll(): Promise<Activity[]> {
    const activities = await this.activityModel.find();
    return activities;
  }

  async create(activity: Activity): Promise<Activity> {
    const res = await this.activityModel.create(activity);
    return res;
  }

  async findById(id: string): Promise<Activity> {
    const activity = await this.activityModel.findById(id);

    if (!activity) {
      throw new NotFoundException('Activity not found');
    }
    return activity;
  }
}
