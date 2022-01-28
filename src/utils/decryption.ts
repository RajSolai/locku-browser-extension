import axios from "axios";
import crypto from "crypto";
import { addAppUrl } from "./urls";

const generator = (userPassword: string) => {
  const md5 = crypto.createHash("sha256").update(userPassword).digest("base64");
  console.log(md5.length);
  return { iv: md5.substr(0, 16), key: md5.substr(0, 32) };
};

export const decryptPassword = (
  encryptedMessage: string,
  userPassword: string
): string => {
  const { iv, key } = generator(userPassword);
  console.log(iv, key);
  console.log(encryptedMessage);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key.toString(), iv);
  const decryptedPassword =
    decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf-8");
  console.log(decryptedPassword);
  // navigator.clipboard.writeText(decryptedPassword);
  return decryptedPassword;
};

export const encryptAddApp = async (
  appPassword: string,
  appname: string,
  email: string,
  usePassword: string
) => {
  const gen = generator(usePassword);
  const encryptedPassword = encryptPassword(gen.key, appPassword);
  const doc = {
    email,
    appname,
    password: encryptedPassword,
  };
  const res = await axios.post(addAppUrl, doc);

  console.log("encrypted pass", encryptedPassword);
  console.log(res.data);
  if (res.data["msg"] == "added-app") {
    return true;
  }
  return false;
};

const encryptPassword = (key: string, message: string) => {
  let iv = key.substr(0, 16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encryptedPassword =
    cipher.update(message, "utf-8", "hex") + cipher.final("hex");
  return encryptedPassword;
};
