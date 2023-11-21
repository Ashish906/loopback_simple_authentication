import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mariaDb',
  connector: 'mysql',
  url: '',
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'mydb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MariaDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mariaDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mariaDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
