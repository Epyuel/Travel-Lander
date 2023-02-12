import { Injectable,Body, Req } from '@nestjs/common';
import { Search } from '@prisma/client';
import { link } from 'fs';
import { PrismaService } from '../prisma/prisma.service';
import { SearchDto } from './dto';


@Injectable()
export class SearchService {
    constructor(private prisma:PrismaService){
        this.createDefaultSearch();
    }

    async createDefaultSearch(){
        const defaultPackages: Search[]=[
            {id:0,
            title:'egypt',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=egypt"
        },{id:1,
            title:'rome',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=rome"
        },{id:2,
            title:'singapore',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=singapore"
        },{id:3,
            title:'dubai',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=dubai"
        },{id:4,
            title:'ertale',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=ertale"
        },{id:5,
            title:'athens',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=athens"
        },{id:6,
            title:'mecca',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=mecca"
        },{id:7,
            title:'jerusalem',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=jerusalem"
        },{id:8,
            title:'gondar',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=gondar"
        },{id:9,
            title:'morroco',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            DepartureDate: "23/02/2023",
            description:"",
            link:"5package_egypt.html?title=morroco"
        }
        ]
        for (const pkg of defaultPackages){
            await this.prisma.search.upsert({
                where:{title: pkg.title},
                create: {
                    ...pkg
                },
                update:{
                    ...pkg
                }
                })
        }
    }

    async getpackages(@Body() dto){
        const pads= await this.prisma.search.findUnique({
            where:{
                title:dto.title 
            }
        })
        return pads;
    }

    async create(dto: SearchDto){
        return this.prisma.search.create({
            data:{
                title:dto.title,
                link:dto.link,
                DepartureDate:dto.departureDate,
            }
        })
    }
}
