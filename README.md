
# Butler
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Create your own personal butler in slack!

## Usage
This butler is a plguin based bot build on top of [Slackbotify](https://www.github.com/Slackbotify/Slackbotify). It comes with the [plugin-loader](https://github.com/Slackbotify/butler-plugin-loader) plugin. The idea is to create a bot which can be easily extended with plugins.

## Plugins
At the moment the following plugins are available:
- [butler-jokes](https://github.com/Slackbotify/butler-jokes) _Add some fun with jokes!_
- [butler-vid](https://github.com/Slackbotify/butler-vid.nl) _Traffic incidents for the roads in Holland_
- [butler-weather](https://github.com/Slackbotify/butler-weather) _Weather forecast plguin_

Have a nice idea for a plugin? Create an issue for it or start coding!

This project is based of the original [Butler](https://github.com/RolfKoenders/butler)

## Run
To start the Butler simply run the start script inside the bin directory:
```
$ ./bin/start
```
Or `npm install` and `npm start` to launch the bot!

### Docker
There is a Dockerfile if you want to build a docker image yourself. Run the following inside the project directory to build the image:
```
$ docker build -t butler .
```
And launch it with the following command:
```
$ docker run -d --name butler butler
```

## Configuration
Configuration of your bot can either be done using a config file or pass environment variables.

### File
In the `config` folder there is a `config.json.example` file you can copy and rename to `config.json`. Once configured you are ready to start the bot.

### Environment variables
If a config file is not ideal for your setup use environment variables. You can see in the table which env var to use for each config value.

| Description | ENV | Required |
|-------------|-----|----------|
| The slack token for this slackbot | BL_SLACK_KEY | ✓ |
| The name of the slackbot | BL_SLACK_NAME | ✓ |
| Forecast.IO Api key | BL_WEATHER_KEY |  |
