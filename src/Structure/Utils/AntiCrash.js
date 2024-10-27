module.exports = (bot) => {
  process.on('uncaughtException', (err) => {
    console.error(`[ANTI-CRASH] Uncaught Exception: ${err.message}`);
    console.error(err.stack);
  });

  process.on('unhandledRejection', (reason, promise) => {
    if (reason.code === 10062) {
      console.warn(
        '[WARNING] Interaction expired before the bot could respond.',
      );
      return;
    }
    console.error('[ANTI-CRASH] Unhandled Rejection:', reason);
  });

  process.on('warning', (warning) => {
    console.warn(`[ANTI-CRASH] Warning: ${warning.message}`);
    console.warn(warning.stack);
  });

  process.on('SIGINT', () => {
    console.log('[ANTI-CRASH] Bot is shutting down...');
    bot.destroy();
    process.exit(0);
  });

  console.log('[ANTI-CRASH] AntiCrash system loaded.');
};
