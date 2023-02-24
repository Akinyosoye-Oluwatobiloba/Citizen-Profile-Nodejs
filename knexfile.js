module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'interview',
      },
      migrations: {
        directory:__dirname + '/db/migrations/' ,
      },
      seeds: {
        directory: './seeds',
      },
    },
  };
  