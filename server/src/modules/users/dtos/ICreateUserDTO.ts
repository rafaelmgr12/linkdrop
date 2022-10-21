export interface ICreateUserDTO {
    id?: string;
    name: string;
    username: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
    
}