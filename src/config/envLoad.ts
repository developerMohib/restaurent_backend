import dotenv from "dotenv";
dotenv.config();

function getEnv() {
  const PORT = process.env.PORT;
  return { PORT };
}
export default getEnv;