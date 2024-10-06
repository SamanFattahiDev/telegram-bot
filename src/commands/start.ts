import {Bot, InlineKeyboard} from "grammy";
import {getAllLeagues} from "../api/leagues";

export const startCommand = (bot:Bot)=>{
    bot.command('start',async (ctx)=>{
        try {
            ctx.reply('Fetching leagues, please wait...');
            const leagues = await getAllLeagues();
            const keyboard = new InlineKeyboard();
            leagues.response.slice(0, 10).forEach((league: any) => {
                keyboard.text(league.league.name, `${league.league.id}`).row();
            });

            await ctx.reply('Select a league:', { reply_markup: keyboard });
        } catch (error) {
            console.error('Error fetching leagues:', error);
            await ctx.reply('Failed to fetch leagues. Please try again later.');
        }

    })
}