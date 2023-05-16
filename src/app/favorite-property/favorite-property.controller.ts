import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Methods } from '@src/common/decorators/methods.decorator';
import { Modules } from '@src/common/decorators/modules.decorator';
import { MethodName } from '@src/common/enums/methods.enum';
import { ModulesName } from '@src/common/enums/modules.enum';
import { GetMany } from '@src/models/base/getMany.dto';
import { CreateFavorite } from '@src/models/favorite-property/create.dto';
import { UserRequestDto } from '@src/models/users/user-request.dto';
import { FavoritePropertyService } from './favorite-property.service';

@ApiTags('favorite-property')
@Controller('favorite-property')
@Modules(ModulesName.FAVORITE_PROPERTY)
export class FavoritePropertyController {

  constructor(private readonly service:FavoritePropertyService) {}

  @ApiBearerAuth()
  @Post()
  @Methods(MethodName.POST)
  createOne(@Req() req: UserRequestDto, @Body() body: CreateFavorite) {
    const { user } = req;
    return this.service.create(user.id, body.propertyId);
  }

  @ApiBearerAuth()
  @Get()
  @Methods(MethodName.GET_LIST)
  getFavoriteProperty(@Req() req: UserRequestDto, @Query() query: GetMany) {
    return this.service.getFavoriteProperty(req.user.id, query);
  }
}
