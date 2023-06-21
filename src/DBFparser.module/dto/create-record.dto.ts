import { IsOptional } from 'class-validator';
import { Expose, plainToClass, Transform } from 'class-transformer';

export class CreateRecordDto {
  @IsOptional()
  @Transform(({ obj }) => obj.LEISTNR)
  @Expose()
  leistnr: number;

  @IsOptional()
  @Transform(({ obj }) => obj.LEISTUNG)
  @Expose()
  leistung: string;

  @IsOptional()
  @Transform(({ obj }) => obj.PREIS)
  @Expose()
  preis: number;

  @IsOptional()
  @Transform(({ obj }) => obj.KNAME)
  @Expose()
  kname: string;

  public static mapFrom(data) {
    const access = plainToClass(CreateRecordDto, data, {
      excludeExtraneousValues: true,
    });

    return { ...access };
  }
}
