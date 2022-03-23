import { Body, Controller, Delete, Get, Param, Patch, Post, } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) { }

    @Get()
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('íd') id: string) {
        return this.coursesService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        console.log(createCourseDto)
        return this.coursesService.create(createCourseDto)


    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coursesService.update(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id: string) { //DELETE
        return this.coursesService.delete(id)
    }
}


