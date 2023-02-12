import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from "class-validator"
export class SearchDto{
    @IsString()
    @IsNotEmpty()
    title:string;
    

    @IsString()
    @IsNotEmpty()
    link:string;
    description?:string;

    @IsString()
    @IsNotEmpty()
    departureDate:string;
}