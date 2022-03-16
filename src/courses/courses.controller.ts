import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll() {
        return 'Listagem de cursos'
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
    create(@Body('name') body) {
        return body

    }
}


