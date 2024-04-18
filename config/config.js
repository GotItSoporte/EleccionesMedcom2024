const oracledb = require("oracledb");

const dbConfig = {
  user: "SPAGOMEZ",
  password: "7$1c0tdOxvFlev#",
  connectString: "10.26.27.94:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com",
};

const readOracle = async (ruteSQL) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(ruteSQL); // "SELECT * FROM PRESIDENTES"
    await connection.close();

    /* const metaData = result.metaData.map(item => item.name);
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

        return resultArray*/

    // Procesar los resultados
    const metaData = result.metaData.map((item) => item.name.toLowerCase());
    const rows = result.rows.map((row) => {
      const rowObject = {};
      metaData.forEach((name, index) => {
        rowObject[name] = row[index];
      });
      return rowObject;
    });

    return rows;
  } catch (err) {
    console.error(err);
    console.log("error consulta");
  }
};

const editOracle = async (ruteSQL, params) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(ruteSQL, params, {
      autoCommit: true,
    }); // "SELECT * FROM PRESIDENTES"
    await connection.close();

    return result;
  } catch (err) {
    console.error(err);
    console.log("error consulta");
    throw err;
  }
};

module.exports = {
  readOracle: readOracle, // Asigna la función a la propiedad dbConfig
  editOracle: editOracle,
};
