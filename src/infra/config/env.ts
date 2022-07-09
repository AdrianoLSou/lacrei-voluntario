import "dotenv/config";

const ENV = {
  DB_NAME: process.env.DB_NAME as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: Number(process.env.DB_PORT),
  DB_USER: process.env.DB_USER as string,
  DB_PASS: process.env.DB_PASS as string,
  SECRET: process.env.SECRET as string,
  MAIL_USER: process.env.MAIL_USER as string,
  MAIL_PASS: process.env.MAIL_PASS as string,
  LINK_BASE: process.env.LINK_BASE as string,
};

export default ENV;
