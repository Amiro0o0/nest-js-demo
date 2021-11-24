import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, 
    MongooseModule.forRoot(
    'mongodb+srv://Amirhossein:BDsaoxC7yjeWzyC8@cluster0.7o8bx.mongodb.net/nstjs-demo?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
