import crypto from "crypto";

export const decryptPassword = (
  encryptedMessage: string,
  userPassword: string
) => {
  const iv = userPassword.substr(0, 16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", userPassword, iv);
  const decryptedPassword =
    decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf-8");
  navigator.clipboard.writeText(decryptedPassword);
  return decryptedPassword;
};

export const addApp = (appPassword: string, usePassword: string) => {
  const encryptedPassword = encryptPassword(usePassword, appPassword);
  //! TODO make a post to db 
};

const encryptPassword = (key, message) => {
  let iv = key.substr(0, 16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encryptedPassword =
    cipher.update(message, "utf-8", "hex") + cipher.final("hex");
  return encryptedPassword;
};
