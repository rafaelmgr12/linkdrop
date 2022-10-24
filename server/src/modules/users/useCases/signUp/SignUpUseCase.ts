import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { User } from "modules/users/entities/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { hash } from "bcrypt";
import { validateRegistration, validateStrongPassword } from "../../utils/userFunctions";
export class SignUpUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );
    if (emailAlreadyExists) {
      throw new AppError("Email already registered");
    }

    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      data.username
    );
    if (usernameAlreadyExists) {
      throw new AppError("Username already registered");
    }
    validateRegistration(data)
    validateStrongPassword(data.password)

    const hashPassword = await hash(data.password, 10);
    data.password = hashPassword;

    const user = await this.usersRepository.create(data);

    return user;
  }
}
