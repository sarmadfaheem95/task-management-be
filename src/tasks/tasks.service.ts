import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Task, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    try {
      return await this.prisma.task.create({ data });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create task');
    }
  }

  async getAllTasks(): Promise<Task[]> {
    try {
      return await this.prisma.task.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch tasks');
    }
  }

  async getTaskById(id: string): Promise<Task> {
    try {
      const task = await this.prisma.task.findUnique({ where: { id } });
      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      return task;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to fetch the task');
    }
  }

  async updateTask(id: string, data: Prisma.TaskUpdateInput): Promise<Task> {
    try {
      const task = await this.prisma.task.findUnique({ where: { id } });
      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      return await this.prisma.task.update({ where: { id }, data });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to update the task');
    }
  }

  async deleteTask(id: string): Promise<Task> {
    try {
      const task = await this.prisma.task.findUnique({ where: { id } });
      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      return await this.prisma.task.delete({ where: { id } });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to delete the task');
    }
  }
}
