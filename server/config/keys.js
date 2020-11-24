// POSTGRES CONFIG
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const POSTGRESQL = {
    DB_HOST: DB_HOST,
    DB_PORT: DB_PORT,
    DB_NAME: DB_NAME,
    DB_USER: DB_USER,
    DB_PASSWORD: DB_PASSWORD,
    POSTGRESQL_URI: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
};

const MAIL = {
    SMTP: process.env.MAIL_SMTP,
    PORT: process.env.MAIL_PORT,
    EMAIL: process.env.MAIL_EMAIL,
    PASSWORD: process.env.MAIL_PASSWORD
}

const YOUTUBE_APP = {
    APP_API_KEY: process.env.YOUTUBE_API_KEY
}

const TWITTER_APP = {
    APP_API_KEY: process.env.TWITTER_APP_API_KEY,
    APP_API_KEY_SECRET: process.env.TWITTER_APP_API_KEY_SECRET,
    APP_API_CALLBACK: process.env.TWITTER_APP_API_CALLBACK,
    APP_API_CALLBACK_CONNECT: process.env.TWITTER_APP_API_CALLBACK_CONNECT
}

const GOOGLE_APP = {
    APP_API_KEY: process.env.GOOGLE_APP_API_KEY,
    APP_API_KEY_SECRET: process.env.GOOGLE_APP_API_KEY_SECRET,
    APP_API_CALLBACK: process.env.GOOGLE_APP_API_CALLBACK,
    APP_API_CALLBACK_CONNECT: process.env.GOOGLE_APP_API_CALLBACK_CONNECT,
    APP_API_SCOPE: process.env.GOOGLE_APP_API_SCOPE,
    APP_API_ACCESS_TYPE: process.env.GOOGLE_APP_API_ACCESS_TYPE,
    APP_API_PROMPT: process.env.GOOGLE_APP_API_PROMPT,
}

// OTHERS
const SERVER = {
    CLIENT_HOME_PAGE_URL: process.env.CLIENT_HOME_PAGE_URL
};

const JWT = {
    JWT_SECRET: process.env.JWT_TOKEN_SECRET
};

const SESSION = {
    SESSION_KEY: process.env.SESSION_KEY,
    TABLE_NAME: process.env.SESSION_TABLE_NAME
}

const WEATHER_SERVICE = {
    API_KEY: process.env.SERVICE_WEATHER_API_KEY
}

// KEYS PACKAGE
const KEYS = {
    POSTGRESQL,
    SERVER,
    JWT,
    TWITTER_APP,
    SESSION,
    GOOGLE_APP,
    YOUTUBE_APP,
    WEATHER_SERVICE,
    MAIL
};

module.exports = KEYS;