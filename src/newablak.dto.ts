import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export default class newAblakDTO {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  tipus: string;

  @Min(0)
  @IsDefined()
  @IsNotEmpty()
  @IsInt({ message: 'A vastagságnak egész számnak kell lennie' })
  vastagsag: number;

  @IsOptional()
  meret: number;
}
