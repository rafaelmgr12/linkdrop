export interface ICreateLinkDTO {
    id?: string;
    title: string;
    url: string;
    description: string;
    user_id: string;
    created_at?: Date;
    updated_at?: Date;
}