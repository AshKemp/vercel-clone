import fs from "fs";
import path from "path";

export const getAllFiles = (folderath: string) => {
  let response: string[] = [];
  const allFilesAndFolders = fs.readdirSync(folderath);
  allFilesAndFolders.forEach((file) => {
    const fullFilePath = path.join(folderath, file);
    if (fs.statSync(fullFilePath).isDirectory()) {
      response = response.concat(getAllFiles(fullFilePath));
    } else {
      response.push(fullFilePath);
    }
  });
  return response;
};
