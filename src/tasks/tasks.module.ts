import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { DbfModule } from '../DBFparser.module/dbf.module';

@Module({
  imports: [DbfModule],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
