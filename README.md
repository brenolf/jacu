<h1 align="center">
	<br>
	<img src="./logo.png" alt="Polyjuice">
	<br>
</h1>

[![Build Status](https://travis-ci.org/brenolf/jacu.svg)](https://travis-ci.org/brenolf/jacu)
[![Coverage Status](https://coveralls.io/repos/github/brenolf/jacu/badge.svg?branch=master)](https://coveralls.io/github/brenolf/jacu?branch=master)
[![Code Climate](https://codeclimate.com/github/brenolf/jacu/badges/gpa.svg)](https://codeclimate.com/github/brenolf/jacu)
[![npm version](https://badge.fury.io/js/jacu.svg)](https://badge.fury.io/js/jacu)
> A tool for versioning database seed files

Jacu is a tool aimed to provide versioning for seed files, much like as migrations do it for versioning schemas. Sometimes you find yourself in trouble when running your seeds because most tools do not provide a temporal seed creation and running - Jacu comes for the rescue!

## Install

The primary target environment for Jacu is Node.js, you will need to install the jacu library, and then install the appropriate database library: pg for PostgreSQL, mysql for MySQL or MariaDB, sqlite3 for SQLite3, or mssql for MSSQL.

```sh
$ npm install jacu --save

# Then add one of the following (adding a --save) flag:
$ npm install pg
$ npm install sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install mariasql
$ npm install strong-oracle
$ npm install oracle
$ npm install mssql
```

## Usage

### Initilization

You need a `jacurc.js` file in the root directory of your project in order to generate seeds. To create a standard one run

```sh
$ jacu init
```

The `jacurc` looks like the following

```js
module.exports = {
  client: 'pg',
  table: 'jacu_seeds',
  folder: 'seeds',

  connections: {
    development: {
      host:     'localhost',
      database: 'jacu_db',
      user:     'user',
      password: 'password'
    },

    test: {
      host:     'localhost',
      database: 'jacu_db',
      user:     'user',
      password: 'password'
    }
  }
};
```

The keys for the `connections` object represent the `NODE_ENV` to be considered when running Jacu seeds.

### Creating a seed

In order to create a seed run

```sh
$ jacu make seedName
```

This will create a timestamped file on the folder provided in your `jacurc.js` file, much like Rails and KnexJS migrations do. The seed file is pretty straight-forward and looks like the following:

```js
module.exports = function(jacu) {
  return jacu('table_name', [
    { column: 'fakeData', date_column: (new Date()) }
  ]);
};
```

### Running seeds

To run your sets of seeds simply run

```sh
$ jacu run
```

Jacu will automatically identify which seeds were not run given the current `NODE_ENV` environment, and then will add them to the database. All seeds run together will count towards a same batch number.

### Rolling back

Jacu allows you to remove tuples from your database by running

```sh
$ jacu rollback
```

Note that this command will erase **every** tuple present in the last batch. Also, in order to rollback to work properly, the the set of the attributes defined in the seed must be a [superkey](https://en.wikipedia.org/wiki/Superkey) of the model and must contain only immutable data.

## Trivia

Jacu is the name of [a bird](https://en.wikipedia.org/wiki/Rusty-margined_guan) that lives in South America and eats coffee seeds.

## License
MIT
