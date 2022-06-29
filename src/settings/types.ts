import { ApiProperty } from '@nestjs/swagger';

export enum ResultCode {
  Success = 0,
  Error = 1,
}

export class Result<T> {
  constructor(
    public resultCode: ResultCode,
    public messages: string[],
    public data?: T,
  ) {}
}

export class BaseEntity {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  __v: number;
}
