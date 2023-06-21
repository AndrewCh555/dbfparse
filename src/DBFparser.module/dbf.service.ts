import { Injectable } from '@nestjs/common';
import { DataTable } from 'dbf-reader/models/dbf-file';
import { Dbf } from 'dbf-reader/dbf';
import { DbfRecordRepository } from './dbf.record.repository';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class DbfService {
  constructor(private readonly dbfRepository: DbfRecordRepository) {}

  async upload(file) {
    const datatable: DataTable = Dbf.read(file.buffer);
    if (datatable) {
      const promises = datatable.rows.map((row: any) => {
        const data = CreateRecordDto.mapFrom(row);
        return this.dbfRepository.create(data);
      });
      await Promise.all(promises);
    }
  }
}
