import { Injectable } from '@nestjs/common';
import { Package } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PackageService {
    constructor(private prisma:PrismaService){
        this.createDefaultPackages();
    }
    async createDefaultPackages(){
        const defaultPackages: Package[]=[
            {id:0,
            title:'egypt',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 20,0, 0, 0,0),
            description:'5 Day Egypt Tour with Nile Cruise. Awaken your inner explorer on this expedition through the lush river valleys and golden desert landscapes of Egypt. Cruise the Nile past the pharaonic temples of Luxor to the Nubian treasures of Aswan. Your voyage will also take you to the mystical Pyramids of Giza, Tomb of the Nobles and the Sphinx.',
            imageURL:'https://i.pinimg.com/originals/80/24/a4/8024a4bedbf4b7b2dec2e300d7a978ec.jpg',
            mapURL:'https://www.trafalgar.com/media/gvqefxia/map-best-egypt-guided-tour-1.jpg?crop=0%2C0.21296296296296297%2C0%2C0.2245370370370371&cropmode=percentage&format=webp&mode=crop&width=1824&height=1026&quality=80',
        },{id:1,
            title:'rome',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 25,0, 0, 0,0),
            description:"Experience the enchanting and historical city of Rome on this unforgettable travel package. Explore the ruins of the Colosseum and the Roman Forum, marvel at the stunning architecture of the Vatican City, and indulge in delicious Italian cuisine at local restaurants. This package offers a perfect balance of sightseeing and leisure time to soak up the city's charm at your own pace. Don't miss out on this opportunity to immerse yourself in one of the world's most beautiful and culturally rich cities.",
            imageURL:'https://international.calpoly.edu/wp-content/uploads/2022/03/rome.jpg',
            mapURL:'https://www.trafalgar.com/media/k5iagwzo/map-best-italy-guided-tour-1.jpg?crop=0.13572724253340493%2C0.2139700058761913%2C0.14571676758386312%2C0.381842249814772&cropmode=percentage&format=webp&mode=crop&width=1824&height=1026&quality=80',
        },{id:2,
            title:'singapore',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 26,0, 0, 0,0),
            description:"Experience the unique blend of culture, modernity and nature on this travel package to Singapore. Explore the city's most iconic landmarks, including the legendary Merlion and Marina Bay Sands, and take a walk through the historic Chinatown. Discover the hidden natural wonders of the city by visiting Gardens by the Bay and the Singapore Botanic Gardens. Indulge in some of the world's best cuisine and shopping, and end each day in one of the city's luxury hotels with breathtaking views of the skyline.",
            imageURL:'https://www.re-thinkingthefuture.com/wp-content/uploads/2020/08/A1635-Web-Architectural-styles-seen-in-Singapore.jpg',
            mapURL:'https://www.trafalgar.com/media/rw2p2kuy/map-colonial-singapore-malaysia-guided-tour-1.jpg?crop=0%2C0.23333333333333334%2C0%2C0.20416666666666666&cropmode=percentage&format=webp&mode=crop&width=1824&height=1026&quality=80',
        },{id:3,
            title:'dubai',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 3,5,0, 0, 0,0),
            description:"Experience the luxury and opulence of Dubai with our exciting travel package. Visit the iconic Burj Khalifa, the tallest building in the world, and explore the stunning Dubai Miracle Garden. Take a stroll along the beautiful Palm Jumeirah and shop at the world-famous Dubai Mall. Experience the thrill of a desert safari and enjoy an evening of traditional Arabic entertainment. Indulge in the delicious cuisine and soak in the vibrant culture of this incredible city.",
            imageURL:'https://www.tmb.ie/wp/wp-content/uploads/2017/02/wael-hneini-QJKEa9n3yN8-unsplash.jpg',
            mapURL:'https://upload.wikimedia.org/wikipedia/commons/a/a1/Map_of_Dubai_blank.svg',
        },{id:4,
            title:'ertale',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 25,0, 0, 0,0),
            description:"Embark on an adventure to Ethiopia's Danakil Depression with our travel package to Erta Ale. Witness the breathtaking views of active volcanoes, explore the lunar-like landscapes, and soak in the natural hot springs. You'll also have the chance to interact with the local Afar people and learn about their culture and way of life. This once-in-a-lifetime experience will leave you with unforgettable memories and a deeper appreciation for the natural wonders of our world.",
            imageURL:"https://www.etnaexperience.com/wp-content/uploads/2018/11/eruption_1-1024x683.jpg",
            mapURL:'https://www.mostbeautifulspots.com/wp-content/uploads/2016/03/Erta-Ale-volcano-Ethiopia-situation-map.jpg',
        },{id:5,
            title:'athens',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 29,0, 0, 0,0),
            description:"Discover the wonders of ancient Greece on this exciting travel package to Athens. Stroll through the vibrant streets of the city, enjoy the breathtaking views of the Acropolis, and visit the world-renowned museums to learn about the fascinating history of this ancient civilization. You'll also get the chance to explore charming neighborhoods, sample delicious local cuisine, and immerse yourself in the vibrant culture of modern-day Athens. With comfortable accommodations and knowledgeable guides, this trip is perfect for anyone interested in history, culture, and adventure.",
            imageURL:'https://i.pinimg.com/originals/30/6d/b7/306db749b8cc9a291630be15faf39ac5.jpg',
            mapURL:'https://www.trafalgar.com/media/rnzjfv3d/map-best-greece-guided-tour-1.jpg?crop=0%2C0.24222222222222223%2C0%2C0.19527777777777777&cropmode=percentage&format=webp&mode=crop&width=1824&height=1026&quality=80',
        },{id:6,
            title:'mecca',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 3, 17,0, 0, 0,0),
            description:"This travel package to Mecca offers a spiritual and cultural journey to one of the most significant places in the Islamic world. The tour includes visits to the Holy Mosque of Masjid al-Haram, the Kaaba, Mount Arafat, and other significant sites in the area. With comfortable accommodation and knowledgeable guides, visitors can experience the unique religious atmosphere and rich history of Mecca. This is an excellent opportunity for those looking to explore the roots of Islam and deepen their spiritual connection.",
            imageURL:'https://traveltomorrow.com/wp-content/uploads/2021/04/tasnim-umar-blbwkwHPItE-unsplash.jpg',
            mapURL:'https://www-tc.pbs.org/lawrenceofarabia/_graphics/nonflash/mecca1.jpg',
        },{id:7,
            title:'jerusalem',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 9,0, 0, 0,0),
            description:"Jerusalem is a must-see destination for anyone seeking a spiritual journey. Our travel package to this historic city is designed to provide an authentic and immersive experience. You'll explore the Old City's ancient walls and narrow alleys, visit the Western Wall, and learn about the city's complex religious history. Additionally, you'll get to try the local cuisine, visit museums, and shop at traditional bazaars. This unforgettable trip will leave you with a deep appreciation for the diverse cultures and traditions that make Jerusalem such a unique place.",
            imageURL:'https://modlangs.gatech.edu/sites/default/files/inline-images/josh-appel-QsU8GRwyS3k-unsplash.jpeg',
            mapURL:'https://www.trafalgar.com/media/lt2pha5m/map-best-israel-guided-tour-1.jpg?crop=0%2C0.19111111111111112%2C0%2C0.24638888888888888&cropmode=percentage&format=webp&mode=crop&width=1824&height=1026&quality=80',
        },{id:8,
            title:'gondar',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 9,0, 0, 0,0),
            description:"Gondar, the former capital of Ethiopia, is a city full of historical and cultural treasures that will leave you in awe. This travel package offers a unique opportunity to experience the magnificent castles of the Gondarine kings, the ancient Fasil Ghebbi fortress, and the beautiful natural surroundings of Lake Tana. Immerse yourself in the rich history and traditions of Ethiopia and make unforgettable memories in Gondar, a city unlike any other.",
            imageURL:'https://as2.ftcdn.net/v2/jpg/01/67/92/23/1000_F_167922388_XvqcKFONxnlX6MEUl9Z15Rs8B0y9fj83.jpg',
            mapURL:'https://maps-ethiopia.com/img/1200/gondar-ethiopia-map.jpg',
        },{id:9,
            title:'morroco',
            createdAt: new Date(2023,1,11,0,0,0,0),
            updatedAt: new Date(2023,1,11,0,0,0,0),
            departure: new Date(2023, 2, 9,0, 0, 0,0),
            description:"Discover the vibrant and exotic culture of Morocco with our travel package. Explore the bustling souks of Marrakech, experience the tranquility of the Sahara Desert and marvel at the stunning architecture of Fez. Our package includes accommodation in comfortable riads, guided tours of famous landmarks, and the opportunity to try delicious local cuisine. Immerse yourself in the colorful atmosphere of Morocco and create unforgettable memories on this adventure of a lifetime.",
            imageURL:'https://as2.ftcdn.net/v2/jpg/03/77/86/17/1000_F_377861788_754RvFIjtE5GRufr9XHJof9u2lqCDvzA.jpg',
            mapURL:'https://www.trafalgar.com/media/k0ybjk5l/map-best-morocco-guided-tour-1.jpg?crop=0%2C0.19521604938271603%2C0%2C0.24228395061728394&cropmode=percentage&format=webp&mode=crop&width=1824&height=1026&quality=80',
        }
        ]
        for (const pkg of defaultPackages){
            await this.prisma.package.upsert({
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
    async getPackage(title){
        const pkg = await this.prisma.package.findUnique({where:{title}})
        return pkg
    }
    
}
