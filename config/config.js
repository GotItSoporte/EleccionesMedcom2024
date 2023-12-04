const oracledb = require("oracledb");

const dbConfig = async (ruteSQL) => {
    try {
        const config = {
            user: 'INFORMACIONPREELECTORAL',
            password: '@44K7UzZr#1I',
            connectString: '10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com'
        };
        
        const connection = await oracledb.getConnection(config);
       
        const result = await connection.execute(ruteSQL); // "SELECT * FROM PRESIDENTES"
      
        await connection.close();

        const metaData = result.metaData.map(item => item.name);
        const rows = result.rows;
        

        const resultArray = [];

        for (const row of rows) {
            const rowObject = {};
            for (let i = 0; i < metaData.length; i++) {
                const name = metaData[i];
                const value = row[i];
                rowObject[name.toLowerCase()] = value;
            }
            resultArray.push(rowObject);
        }

        return resultArray

    } catch (err) {
        console.error(err);
        console.log("error consulta")
    }
};

module.exports = {
    dbConfig: dbConfig  // Asigna la función a la propiedad dbConfig
};
