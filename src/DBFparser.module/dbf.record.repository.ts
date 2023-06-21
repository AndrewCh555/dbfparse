import { InjectModel } from '@nestjs/sequelize';
import { DbfRecord } from './dbf.model';
import { CreateRecordDto } from './dto/create-record.dto';

export class DbfRecordRepository {
  constructor(
    @InjectModel(DbfRecord)
    private readonly data: typeof DbfRecord,
  ) {}

  async create(row: CreateRecordDto): Promise<DbfRecord> {
    try {
      return await this.data.create({ ...row });
    } catch (err) {
      console.log(err);
    }
  }
}
