import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos do Framework NestJS',
            lastname: 'Fernandes',
            description: 'Fundamentos do Framework NestJS',
            tags: ['Node.js', 'NestJS', 'Javascript'],
            

        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        return this.courses.find((course: Course) => course.id === Number(id))

    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)

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
