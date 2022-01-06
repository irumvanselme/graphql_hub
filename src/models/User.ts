import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@ObjectType()
export class User {
    @Field()
    @PrimaryGeneratedColumn({ name: "_id" })
    id?: number;

    @Field()
    @Column()
    firstName?: string;

    @Column()
    @Field()
    lastName?: string;

    @Field()
    @Column({ name: "_age" })
    age?: number;

    @Column({
        default: "USER",
        enum: ["USER", "ADMIN", "DRIVER"],
        nullable: false,
    })
    @Field()
    role?: string;

    constructor(_age: number, firstName: string) {
        this.age = _age;
        this.firstName = firstName;
    }
}
