// Note that we're importing from 'grammy/web', not 'grammy'.
import { Bot, webhookCallback } from "grammy/web";

// The following line of code assumes that you have configured the secrets BOT_TOKEN and BOT_INFO.
// See https://developers.cloudflare.com/workers/platform/environment-variables/#secrets-on-deployed-workers.
// The BOT_INFO is obtained from `bot.api.getMe()`.
const bot = new Bot("6107196857:AAHADvNYpZFqLc6GgvgSPN1LMq5SO5A0QLY");

bot.command("start", async (ctx) => {
  await ctx.reply("Hello Telegram!");
});

addEventListener("fetch", webhookCallback(bot, "cloudflare"));
