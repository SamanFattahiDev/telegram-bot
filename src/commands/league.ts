import { Bot, Context } from 'grammy';
import { InlineKeyboard } from 'grammy';
import {getAllTeams} from "../api/teams";

// Define a function to handle league selection
export const leagueCommand = (bot: Bot<Context>) => {
    bot.on('callback_query', async (ctx) => {
        // @ts-ignore
        const leagueId:string | number = parseInt(ctx.update.callback_query.data);

        await ctx.reply('Fetching teams, please wait...');

        try {
            const teams = await getAllTeams(leagueId);
            const keyboard = new InlineKeyboard();
            teams.response.slice(0, 10).forEach((team: any) => {
                keyboard.text(team.team.name, `${team.team.id}`).row();
            });

            await ctx.reply('Select a team:', { reply_markup: keyboard });
        } catch (error) {
            console.error('Error fetching teams:', error);
            await ctx.reply('Failed to fetch teams. Please try again later.');
        }
    });
};
