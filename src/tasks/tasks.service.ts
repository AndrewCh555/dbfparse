import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { DbfService } from '../DBFparser.module/dbf.service';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class TasksService {
  constructor(private readonly dbfService: DbfService) {}
  //EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT = "0 0 1 * *",
  @Cron('45 * * * * *')
  async handleCron() {
    function getFilesInDirectory(directory: string): string[] {
      const files = fs.readdirSync(directory);
      return files.map((file) => path.join(directory, file));
    }
    const directoryPath =
      'C:\\Flesh\\projects\\FIVE_projects\\DBFparse\\dbfparse\\upload';
    const pathRes = path.resolve(directoryPath);
    const file = getFilesInDirectory(pathRes);

    file.map(async (file) => {
      console.log('.dbf', file, file.includes('.dbf'));

      const data = await fs.promises.readFile(file, null);
      return this.dbfService.upload(data);
    });
  }
}
