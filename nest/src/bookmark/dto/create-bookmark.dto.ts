import { IsNotEmpty, IsString } from "class-validator"

export class createBookmarkDto{
    @IsString()
    @IsNotEmpty()
    title: string
    
    @IsString()
    description: string
    
    @IsString()
    @IsNotEmpty()
    link: string
}