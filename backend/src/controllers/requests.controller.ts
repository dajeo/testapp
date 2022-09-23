import { Body, Controller, Get, Put, Delete, Param } from '@nestjs/common';
import { CreateRequestDto } from 'src/dtos/createRequest.dto';
import { EditRequestDto } from 'src/dtos/editRequest.dto';
import { Request } from 'src/schemas/request.schema';
import { RequestsService } from 'src/services/requests.service';

@Controller('requests')
export class RequestsController {
    constructor(private requestsService: RequestsService) {}

    @Get()
    async getAll(): Promise<Request[]> {
        return this.requestsService.findAll();
    }

    @Put()
    async create(@Body() createRequestDto: CreateRequestDto): Promise<Request> {
        return await this.requestsService.create(createRequestDto);
    }

    @Put(':id')
    async edit(
        @Param('id') id: string,
        @Body() editRequestDto: EditRequestDto,
    ): Promise<string> {
        await this.requestsService.edit(id, editRequestDto);

        return 'Ok';
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<string> {
        await this.requestsService.delete(id);

        return 'Ok';
    }
}
