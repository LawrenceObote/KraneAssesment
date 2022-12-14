import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { API_ENDPOINT } from '../../client/src/commons/constants/index';
const prisma = new PrismaClient();
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(API_ENDPOINT.GET_POSTS)
  async getPosts(): Promise<any> {
    const response = await prisma.post.findMany();
    return response;
  }

  @Post(API_ENDPOINT.UPLOAD_POST)
  async uploadPosts(@Body() body): Promise<any> {
    const response = await prisma.post.create({
      data: {
        title: body.title,
        textBody: body.textBody,
      },
    });
    return response;
  }
}
