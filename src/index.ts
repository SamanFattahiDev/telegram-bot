import bot from "./bot";
import consola from "consola";
import {startCommand} from "./commands/start";
import {leagueCommand} from "./commands/league";
import {teamCommand} from "./commands/team";

bot.catch((error) => {
    consola.error(error, 'error happened while running the bot')
})

startCommand(bot)
leagueCommand(bot)
teamCommand(bot)
bot.start()

