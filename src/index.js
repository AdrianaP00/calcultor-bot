// Note that we're importing from 'grammy/web', not 'grammy'.
import { Bot, webhookCallback } from "grammy/web";

// The following line of code assumes that you have configured the secrets BOT_TOKEN and BOT_INFO.
// See https://developers.cloudflare.com/workers/platform/environment-variables/#secrets-on-deployed-workers.
// The BOT_INFO is obtained from `bot.api.getMe()`.
const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", async (ctx) => {
  await ctx.reply("Hello W!");
});

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
