import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { BookmarkService } from './bookmark.service';
import { createBookmarkDto, EditBookmarkDto } from './dto';


@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService){}
    @Post()
    createBookmark(@Body() dto: createBookmarkDto){
        return this.bookmarkService.createBookmark(dto);
    }
    
    @Get()
    getbookmarks(){
        return this.bookmarkService.getbookmarks();
    }

    @Get(':id')
    getBookmarkById(@Param('id', ParseIntPipe) bookmarkId:number){
        return this.bookmarkService.getBookmarkById(bookmarkId);
    }

    @Patch(':id')
    editBookmarkById(@Body() dto: EditBookmarkDto, @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkService.editBookmarkById(dto, bookmarkId);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteBookmarkById(@Param('id',ParseIntPipe) bookmardId: number){
        return this.bookmarkService.deleteBookmarkById(bookmardId)
    }
}
