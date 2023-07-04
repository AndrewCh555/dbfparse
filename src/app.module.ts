import { Module } from '@nestjs/common';
import { DbfModule } from './DBFparser.module/dbf.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ScheduleModule.forRoot(), DbfModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
