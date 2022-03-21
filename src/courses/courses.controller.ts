import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) { }

    @Get()
    findAll(@Res() response) {
        return response.status(200).send({
            curso1: "JS",
            curso2: "JAVA",
            curso3: "C#"
        });
    }

    @Get(':id')
    findParams(@Param() params) { //BUSCAMAIS DE UM PARAMETRO
        return `Curso #${params.id}`
    }

    @Get(':idd')
    findParam(@Param('idd') idd: string) { //BUSCA UM UNICO PARAMETRO
        return `Curso #${idd}`
    }

    @Post()
    @HttpCode(201)
    create(@Body() body) {
        return body

    }

    @Patch(':id')
    update(@Param('id') id: string, @Body('name') body) {
        return `Course Update #${id}`
    }

    @Delete(':id')
    remove(@Param('id') id: string) { //DELETE
        return `Exclusão do Curso #${id}`
    }
}


