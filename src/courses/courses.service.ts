import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos do Framework NestJS',
            description: 'Fundamentos do Framework NestJS',
            tags: ['Node.js', 'NestJS', 'Javascriptt'],


        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find((course: Course) => course.id === Number(id))

        if (!course) {
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND)
        }

        return course;
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)
        return createCourseDTO;

    }

    update(id: string, updateCourseDTO: any) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id))
        this.courses[indexCourse] = updateCourseDTO

    }

    delete(id: string) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id))

        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        }

    }


}
