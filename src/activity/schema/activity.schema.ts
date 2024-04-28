import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Activity {
  @Prop()
  workingHours: boolean;

  @Prop()
  commits: number;

  @Prop()
  date: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
