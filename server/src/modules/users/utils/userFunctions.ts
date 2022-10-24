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
    if (!data.password) {
        throw new AppError("Password is required");
    }
    
 
}



export function validadeEmail(email:string): void{
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        throw new AppError("Invalid email");
    }

}

export function validateStrongPassword(password: string): void {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!re.test(password)){
        throw new AppError("Password must have at least 8 characters, 1 letter and 1 number");
    }
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