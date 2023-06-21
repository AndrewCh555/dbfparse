import { IsOptional } from 'class-validator';

export class CreateRecordDto {
  @IsOptional()
  leistnr: number;

  @IsOptional()
  leistung: string;

  @IsOptional()
  preis: number;

  @IsOptional()
  kname: string;
}
