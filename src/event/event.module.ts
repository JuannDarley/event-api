import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventRepositorie } from './repositories/create-event.repositorie';
import { CreateEventService } from './services/create-event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './Schema/events.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Event.name, schema: EventSchema}])
  ],
  controllers: [EventController],
  providers: [CreateEventRepositorie, CreateEventService],
  exports: [ CreateEventRepositorie, CreateEventService]
})
export class EventModule {}
