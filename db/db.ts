
import * as sql from 'mssql';

export const config = {
        user: 'ONETECH\svc-jenkinsblds',
        host: 'localhost',
        database: 'AWECORPQA1DB01.onetech.local',
        password: 'Pom1dor4ik',
        port: 5477,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
        options: {
          trustServerCertificate: true,
          encrypt: true,
        }
    };   
    
    export let pool: sql.ConnectionPool; // Declare the 'pool' variable

    try {
      pool = await sql.connect(JSON.stringify(config)); // Assign a value to 'pool'
      console.log('Connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
    
