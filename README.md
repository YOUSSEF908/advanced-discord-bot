# Advanced Discord Bot

![Node.js](https://img.shields.io/badge/Node.js-v20.0.0-brightgreen) ![Discord.js](https://img.shields.io/badge/Discord.js-v14.12.1-blue) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A beginner-friendly and customizable Discord bot built with Node.js and Discord.js. This bot features an advanced commands/events handler and a user-friendly dashboard.

## Table of Contents

- [Features](#features)
- [Installation](#installation)

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

#### Dashboard : 
> You should find the dashboard on http://localhost:3000 if you have not changed the port and if you did make sure to also change it on the Redirect section for the bot.


> If you reached to this point don't forget to 🌟 this project
