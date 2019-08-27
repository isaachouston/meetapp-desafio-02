import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  // faz conexão com o a base de dados e carregados os models
  init() {
    this.connection = new Sequelize(databaseConfig); // conexão com a base de dados
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
