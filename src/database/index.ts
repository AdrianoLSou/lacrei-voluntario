import Conection from "./Conection";
import "dotenv/config";

const mySqlConection = new Conection("", "root", "", {
  dialect: "mysql",
  port: 3306,
  host: "localhost",
});

export { mySqlConection };
