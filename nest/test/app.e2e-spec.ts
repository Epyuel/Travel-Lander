import { INestApplication } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import * as pactum from 'pactum';
import { PrismaService } from "../src/prisma/prisma.service";
import { AppModule } from "../src/app.module";
import { createBookmarkDto, EditBookmarkDto } from "src/bookmark/dto";
describe('App e2e', () =>{
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = 
      await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ 
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);


    prisma= app.get(PrismaService)
    await prisma.cleanDb();



  });
  afterAll(() => {
    app.close();
  });

  describe('Bookmarks', () => {
    
    describe('create bookmark', () => {
            const dto: createBookmarkDto = {
        title: "first Bookmark",
        description:"afar",
        link: "youtube.com"
      }
      it('should create bookmarks', () => {
        return pactum
          .spec()
          .post('https://localhost/3333/bookmarks')
          .withBody(dto)
          .expectBody([])
          .stores('bookmarkId', 'id')
      })
    });
    
    describe('Get bookmarks', () => {
      it('should get bookmarks', () => {
        return pactum
          .spec()
          .get('https://localhost/3333/bookmarks')
          .expectJsonLength(1)
      })
    });
    describe('Get bookmark by id', () => {
      it('should get bookmark by id', () => {
        return pactum
          .spec()
          .get('https://localhost/3333/bookmark/{id}')
          .withPathParams('id','$S{bookmarId}')
          .expectBodyContains('$S{bookmarkId')
      })
    });
    describe('Edit bookmark by id', () => {
      const dto: EditBookmarkDto ={
        title: 'course on freecodecamp youtube',
        description: 'learn how to use kubernetes in this complete course',
        link:""
      }
      it('should edit bookmark by id', () => {
        return pactum
          .spec()
          .patch('https://localhost/3333/bookmark/{id}')
          .withPathParams('id','$S{bookmarId}')
          .withBody(dto)
          .expectBodyContains(dto.title)
          .expectBodyContains(dto.description);

      })
    });
    describe('Delete bookmark by id', () => {
      it('should delete bookmark by id', () => {
        return pactum
          .spec()
          .delete('https://localhost/3333/bookmark/{id}')
          .expectStatus(204)
          .withPathParams('id','$S{bookmarId}');

      })
    });
  });
  // it.todo('should pass');
})