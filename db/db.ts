
import test, { expect } from '@playwright/test';
import { ConnectionPool } from 'mssql';

let pool: ConnectionPool;

export async function getPool() {
  var uzer = String.raw`ONETECH\svc-jenkinsblds`;
  if (!pool) {
    pool = new ConnectionPool({
      user: uzer,
      password: 'Pom1dor4ik',
      server: 'AWECORPQA1DB01.onetech.local',
      database: '',
      port: 1433,
      options: {
        trustServerCertificate: true,
        encrypt: true,
      }
    });

    await pool.connect();
  }

  return pool;
}

    
