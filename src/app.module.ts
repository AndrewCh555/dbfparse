import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DbfRecord } from './DBFparser.module/dbf.model';
import { DbfModule } from './DBFparser.module/dbf.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'dbf',
      models: [DbfRecord],
    }),
    DbfModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
