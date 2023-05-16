import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destination } from '@src/entities/destinations.entity';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { PropertyRepository } from './property.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyRepository, Destination])],
  providers: [PropertyService],
  controllers: [PropertyController],
  exports: [PropertyService]
})
export class PropertyModule {}
