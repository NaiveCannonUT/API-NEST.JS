import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })

export class User {
    @PrimaryGeneratedColumn()
    PkUser: number

    @Column()
    UserName: string

    @Column()
    Password: string

    // @Column({nullable: true})//La columna podra estar vacia
    // Create : string
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })//La columna podra estar vacia
    Create: Date
}