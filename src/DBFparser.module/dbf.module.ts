import { Module } from '@nestjs/common';
import { DbfController } from './dbf.controller';
import { DbfService } from './dbf.service';
import { DbfRecordRepository } from './dbf.record.repository';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [DbfController],
  providers: [DbfService, DbfRecordRepository, PrismaService],
  exports: [DbfService, DbfRecordRepository],
})
export class DbfModule {}
