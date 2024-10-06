import {Bot, Context} from 'grammy';
import {getTeamMatches} from "../api/matches";

// Define a function to handle team selection
export const teamCommand = (bot: Bot<Context>) => {
    bot.on('callback_query', async (ctx) => {
        // @ts-ignore
        const teamId: string | number = parseInt(ctx.update.callback_query.data);

        await ctx.reply('Fetching matches, please wait...');

        try {
            const matches = await getTeamMatches();

            let responseMessage = `Results for team ${teamId}:\n\n`;

            matches.response.forEach((match: any) => {
                const homeTeam = match.teams.home.name;
                const awayTeam = match.teams.away.name;
                const score = match.score.fulltime.home !== null ? `${match.score.fulltime.home} - ${match.score.fulltime.away}` : 'N/A';
                responseMessage += `${homeTeam} vs ${awayTeam}: ${score}\n`;
            });

            await ctx.reply(responseMessage);
        } catch (error) {
            console.error('Error fetching matches:', error);
            await ctx.reply('Failed to fetch matches. Please try again later.');
        }
    });
};
