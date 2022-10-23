import { AppError } from './../../../errors/AppError';
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export function validateRegistration(data: ICreateUserDTO): void {
    if (!data.name) {
        throw new AppError("Name is required");
    }
    if (!data.username) {
        throw new AppError("Username is required");
    }
    if (!data.email) {
        throw new AppError("Email is required");
    }

    
 
}



export function validadeEmail(email:string): boolean{
    const re = /\S+@\S+\.\S+/;
    return re.test(email);

}

export function validateLogin(data: ICreateUserDTO): boolean {
    if (!data.email) {
        throw new Error("Email is required");
    }
    if (!data.password) {
        throw new Error("Password is required");
    }

    return true;
}