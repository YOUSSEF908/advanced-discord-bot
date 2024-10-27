# Advanced Discord Bot

![Node.js](https://img.shields.io/badge/Node.js-v16.0.0-brightgreen) ![Discord.js](https://img.shields.io/badge/Discord.js-v14.12.1-blue) ![GitHub issues](https://img.shields.io/github/issues/AmineDev07/advanced-discord-bot) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A beginner-friendly and customizable Discord bot built with Node.js and Discord.js. This bot features an advanced commands/events handler and a user-friendly dashboard.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Showcasing](#showcasing)

## Features

> [!NOTE]
> The bot includes two main features to enhance your discord.js debut:
> - **Advanced Handler** : Using the simplest of scripts i was able to make a very solid commands/events handler
> - **Dashboard**: A web-based interface for testing out a basic dashboard.

## Installation

### Prerequisites

- Node.js (version 16 or later)
- Discord account and a Discord server to test the bot

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
3. **Create a `.env` file**:
```env
token = "Your Bot's Token goes here"
mongoURI = "Your mongodb URI goes here"
clientSecret = "Your Bot's client secret goes here"
```
4. **Run The Bot**:

#### For developement mode with automatic restarts:
```bash
npm run devMode
```
#### For production:
```bash
npm start
```
5. **Adding callbackURL**:
<img src="https://media.discordapp.net/attachments/1300075032453714052/1300211098016022670/image.png?ex=67200372&is=671eb1f2&hm=405c4bc327dc22aa9d739394a4aac18ea83097849743ec501cc5d3d0900896b8&=&format=webp&quality=lossless&width=1230&height=675">

#### Dashboard : 
> You should find the dashboard on http://localhost:3000 if you have not changed the port and if you did make sure to also change it on the Redirect section for the bot.

## Showcasing 
#### Ping Command: 
<img src="https://media.discordapp.net/attachments/1300075032453714052/1300209975112503408/image.png?ex=67200266&is=671eb0e6&hm=c4003751926063edaf5933dcb1a75808329d80157929e272e0dffd84ce5e3c97&=&format=webp&quality=lossless&width=516&height=217">

#### Dashboard : 
<img src="https://media.discordapp.net/attachments/1300075032453714052/1300210038274523136/image.png?ex=67200275&is=671eb0f5&hm=e27add5b60dbad489e8b27d093a4fc600617c8d73bcedfd1a425edfaa51bdb98&=&format=webp&quality=lossless&width=1238&height=675">



> If you reached to this point don't forget to 🌟 this project