import { Injectable } from "@nestjs/common";
import { CreateEventRepositorie } from "../repositories/create-event.repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()

export class CreateEventService {
  constructor(
    private readonly CreateEventRepository: CreateEventRepositorie 
  ){}

  async execute(event: IEventEntity): Promise<IEventEntity>{
    let newEvent = await this.CreateEventRepository.execute(event)
    
    return newEvent
  }
}