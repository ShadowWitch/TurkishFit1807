import nodemailer from "nodemailer";
interface RequestEnviarMail {
  email: string;
  password: string;
}

export const enviarMail = async ({ email, password }: RequestEnviarMail) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "rosalesdark@gmail.com",
      pass: "iayk vuoc nkdv lzzt",
    },
  };

  const transport = nodemailer.createTransport(config);

  const mensaje = {
    from: "rosalesdark@gmail.com",
    to: email,
    subject: "Power Gym - Recuperación de Contraseña",
    text: `
        Recuperación de Contraseña
        Hola estimado, se ha solicitado cambio de su contraseña.
        Su nueva contraseña es: ${password}
    `,
  };

  const info = await transport.sendMail(mensaje);

  console.log("INFO >> ", info);
};
