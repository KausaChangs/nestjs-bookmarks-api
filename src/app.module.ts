import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import * as bodyParser from 'body-parser';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(bodyParser.urlencoded({ extended: true })).forRoutes('*');
  }
}
