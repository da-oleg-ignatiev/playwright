
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

    try {
      await pool.connect();
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
    }
  }

  return pool;
}

    
