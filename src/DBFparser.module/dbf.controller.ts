import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadFileDto } from './dto/upload-file.dto';
import { ApiConsumes } from '@nestjs/swagger';
import { DbfService } from './dbf.service';
import { SingleFileInterceptor } from '../shared/interceptors/fastify-file.interseptor';

@Controller()
export class DbfController {
  constructor(private readonly dbfService: DbfService) {}

  @Post('upload')
  @HttpCode(HttpStatus.OK)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(SingleFileInterceptor('file'))
  async uploadFile(
    @Body() body: UploadFileDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const response = {
      message: 'File uploaded successfully!',
      file: {
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
      },
    };
    await this.dbfService.upload(file);
    return response;
  }
}
