import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DbfRecord } from './dbf.model';
import { DbfController } from './dbf.controller';
import { DbfService } from './dbf.service';
import { DbfRecordRepository } from './dbf.record.repository';

@Module({
  imports: [SequelizeModule.forFeature([DbfRecord])],
  controllers: [DbfController],
  providers: [DbfService, DbfRecordRepository],
  exports: [DbfService, DbfRecordRepository],
})
export class DbfModule {}
