import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('courses')
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column('json', { nullable: true })
    tags: string[]
}