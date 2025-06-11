# Advanced Discord Bot

![Node.js](https://img.shields.io/badge/Node.js-v20.0.0-brightgreen) ![Discord.js](https://img.shields.io/badge/Discord.js-v14.12.1-blue) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A beginner-friendly and customizable Discord bot built with Node.js and Discord.js. This bot features an advanced commands/events handler and a user-friendly dashboard.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)

## Features

> [!NOTE]
> The bot includes two main features to enhance your discord.js debut:
> - **Advanced Handler** : Using the simplest of scripts i was able to make a very solid commands/events handler
> - **Dashboard**: A web-based interface for testing out a basic dashboard.

## Installation

### Prerequisites

- Node.js (version 16 or later)
- Discord account and a Discord server to test the bot
- MongoDB (optional, for database features)

### Steps

1. **Clone the repository**:

```bash
git clone https://github.com/AmineDev07/advanced-discord-bot.git
cd advanced-discord-bot
```

2. **Install dependencies**:

```bash
npm install
```

3. **Configure your bot**:
   - Copy the `.env` file and fill in your bot's credentials
   - Get your bot token from the [Discord Developer Portal](https://discord.com/developers/applications)
   - If you want dashboard features, also get your client secret from the same portal

4. **Run The Bot**:

#### For development mode with automatic restarts:
```bash
npm run devMode
```

#### For production:
```bash
npm start
```

## Configuration

### Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Required - Your Discord bot token
token=YOUR_BOT_TOKEN_HERE

# Optional - MongoDB connection string (for database features)
mongoURI=mongodb://localhost:27017/discord-bot

# Optional - Discord client secret (for dashboard authentication)
clientSecret=YOUR_CLIENT_SECRET_HERE

# Optional - Session secret for dashboard security
SESSION_SECRET=your-random-secret-key
```

### Getting Your Bot Token

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select an existing one
3. Go to the "Bot" section
4. Copy the token and paste it in your `.env` file

### Setting Up MongoDB (Optional)

If you want to use database features like command cooldowns:

1. Install MongoDB locally or use a cloud service like MongoDB Atlas
2. Add your MongoDB connection string to the `mongoURI` variable in `.env`

### Dashboard Setup (Optional)

To use the web dashboard:

1. In the Discord Developer Portal, go to OAuth2 settings
2. Add `http://localhost:3000/auth/redirect` to your redirect URIs
3. Copy your client secret and add it to the `.env` file
4. The dashboard will be available at `http://localhost:3000/auth/login`

### Bot Permissions

When inviting your bot to a server, make sure it has the following permissions:
- Send Messages
- Use Slash Commands
- Read Message History
- Embed Links

## Features

- **Slash Commands**: Modern Discord slash command support
- **Command Cooldowns**: Prevent command spam (requires MongoDB)
- **Web Dashboard**: Manage your bot through a web interface
- **Error Handling**: Robust error handling and anti-crash system
- **Modular Structure**: Easy to extend with new commands and events

> If you reached this point don't forget to 🌟 this project