import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './Dto/create-user.dto'
import { UpdateUserDto } from './Dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(user: CreateUserDto) {

        const NewUSer = this.userRepository.create(user)
        return this.userRepository.save(NewUSer)

    };

    getUsers() {
        return this.userRepository.find() //Busca todo Fin()
    };

    getUser(id: number) {
       return  this.userRepository.findOne({ //Buscar mediante el Id
            where: {
                PkUser: id
            }
        })
    }

    deleteUser(id: number){
        return this.userRepository.delete({PkUser: id})
    }

    updateUser(id: number, user: UpdateUserDto) {
        this.userRepository.update({PkUser: id}, user)
    }
}
