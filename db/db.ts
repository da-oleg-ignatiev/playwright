
import test, { expect } from '@playwright/test';
import { ConnectionPool } from 'mssql';

let pool: ConnectionPool;

export async function getPool() {
  if (!pool) {
    pool = new ConnectionPool({
      user: 'ONETECH\svc-jenkinsblds',
      password: 'Pom1dor4ik',
      server: 'localhost',
      database: 'AWECORPQA1DB01.onetech.local',
      port: 5477,
      options: {
        trustServerCertificate: true,
        encrypt: true,
      }
    });

    await pool.connect();
  }

  return pool;
}

test('DB', async () => { // 'DB Test' is the name of the test
  const sqlQuery = "SELECT TOP 1 FROM  CreditFulfillment WHERE c.EmailAddress = 'GARYGRAHART@gmail.com'";
  const pool = await getPool();
  if (pool) {
    const result = await pool.request().query(sqlQuery);
    console.log(result);
    expect(result.recordset.length).toBe(1);
  }
});
    
