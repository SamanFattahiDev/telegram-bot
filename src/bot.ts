import {Bot, Context} from 'grammy';
import * as dotenv from 'dotenv';

dotenv.config();

const bot = new Bot<Context>(process.env.BOT_TOKEN as string);

export default bot