import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { PrismaService } from '../prisma.service';
import { DbfRecord } from '@prisma/client';

@Injectable()
export class DbfRecordRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRecordDto): Promise<DbfRecord> {
    return this.prisma.dbfRecord.create({
      data,
    });
  }
}
