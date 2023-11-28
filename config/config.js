const OracleDB = require('oracledb');

const dbConfig = async (ruteSQL) =>{
    const config = {
        user: 'SPAGOMEZ',
        password: '7$1c0tdOxvFlev#',
        connectString: '10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com'
    };
    
    conn = await OracleDB.getConnection(config);
    
    const result = await conn.execute(
        ruteSQL
      );
    
    await connection.close();

    return result 
    
}

module.exports = dbConfig;  

