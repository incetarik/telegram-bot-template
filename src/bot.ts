import { IBot, bot, command } from 'telegram-bot-framework'

export interface TelegramBot extends IBot { }

@bot()
export class TelegramBot {
  *start() {
    // The function that will be executed when the bot /start s
    yield 'Hello world'
  }

  *help() {
    // The function that will be executed when the user sends /help
    yield 'You can edit the contents of these functions or remove.'
  }

  @command()
  async *hello() {
    const { first_name, last_name } = this.context.from
    const name = `${first_name} ${last_name}`
    yield `Hello ${name} 👋`
  }
}

export function startBot() {
  const instance = new TelegramBot()
  instance.run()
}

if (require.main === module) {
  startBot()
}
