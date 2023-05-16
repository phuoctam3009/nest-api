import { Injectable } from '@nestjs/common';
import { BaseService } from '@src/base.service';
import { Notification } from '@src/entities/notification.entity';
import { GetMany } from '@src/models/base/getMany.dto';
import { IResponseFormat } from '@src/models/base/response.interface';
import { format } from '@src/utils/format-response-get-many';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationService extends BaseService<Notification, NotificationRepository> {
  constructor(protected readonly repository: NotificationRepository) {
    super(repository);
  }

  async getNotificationOfMe(
    userId: number,
    query: GetMany
  ): Promise<IResponseFormat<Notification>> {
    const temp = await this.getManyData(query, [], { userId }, true, {
      order: {
        createdAt: 'DESC'
      }
    });
    return temp;
  }
}
