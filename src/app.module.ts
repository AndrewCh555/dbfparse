import { Module } from '@nestjs/common';
import { DbfModule } from './DBFparser.module/dbf.module';

@Module({
  imports: [DbfModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
