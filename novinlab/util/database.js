import mysql2 from "mysql2/promise";

const databaseConnection = await mysql2.createConnection({
  host: "localhost",
  database: "novinlab",
  user: "root",
  password: "787845451212Ali",
});

export async function userData() {
  const query = "SELECT * FROM users";
  try {
    const [data] = await databaseConnection.execute(query);
    databaseConnection;
    return data;
  } catch (error) {
    return {
      error: error,
    };
  }
}

export default databaseConnection;
