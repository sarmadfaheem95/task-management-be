import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiPropertyOptional({ example: 'Complete onboarding process' })
  title?: string;

  @ApiPropertyOptional({
    example:
      'Finish all onboarding tasks and review documentation for the project',
  })
  description?: string;

  @ApiPropertyOptional({ example: 'In Progress' })
  status?: 'Pending' | 'In Progress' | 'Done';
}
