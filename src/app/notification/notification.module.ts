import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationController } from './notification.controller';
import { NotificationRepository } from './notification.repository';
import { NotificationService } from './notification.service';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [TypeOrmModule.forFeature([NotificationRepository])]
})
export class NotificationModule {}
