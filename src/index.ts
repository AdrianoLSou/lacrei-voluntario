import App from "./infra/App";

const app = new App();

app.setup({ port: Number(process.env.PORT as string) });
