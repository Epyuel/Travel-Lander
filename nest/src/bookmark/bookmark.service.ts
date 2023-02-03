import { Injectable } from '@nestjs/common';
import { createBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from "../prisma/prisma.service";
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService){}
    async createBookmark(dto: createBookmarkDto){
        const bookmark = await this.prisma.bookmark.create({
            data: {
                ...dto
            }
        })
    }
    
    getbookmarks(){
        this.prisma.bookmark.findMany()
    }

    getBookmarkById(bookmarkId: number){
        this.prisma.bookmark.findFirst({where:{id: bookmarkId}})
    }

    async editBookmarkById(dto: EditBookmarkDto, bookmarkId:number){
        const bookmark = await this.prisma.bookmark.findUnique({where:{
            id:bookmarkId
        }})
        if ( !bookmark){
            throw new NotFoundException("the resource doesn't exist")
        }
        return this.prisma.bookmark.update({
            where:{
                id: bookmarkId
            }, 
            data: {
            ...dto
            }
        })
    }

    async deleteBookmarkById(bookmarkId: number){
        const bookmark = await this.prisma.bookmark.findUnique({where:{
            id:bookmarkId
        }})
        if ( !bookmark){
            throw new NotFoundException("the resource doesn't exist")
        }

        await this.prisma.bookmark.delete({
            where: {
                id: bookmarkId
            }
        })
    }
}
