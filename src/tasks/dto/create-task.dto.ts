import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsIn } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Complete onboarding process' })
  @IsString()
  title: string;

  @ApiProperty({
    example:
      'Finish all onboarding tasks and review documentation for the project',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 'Pending' })
  @IsIn(['Pending', 'In Progress', 'Done'])
  status: 'Pending' | 'In Progress' | 'Done';
}
