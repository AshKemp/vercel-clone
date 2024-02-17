import { S3 } from "aws-sdk";

import fs from "fs";

const s3 = new S3({
  credentials: {
    accessKeyId: "c6f5297b909b7bc60c122605f1db3395",
    secretAccessKey:
      "75dba6dcea59702bada497ab3ff477a52814c509c0f40a577d7cbb8948b6fa17",
  },
  endpoint: "https://64e04d382b4e848cf00220d4577a091a.r2.cloudflarestorage.com",
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  console.log("called");
  const fileContent = fs.readFileSync(localFilePath);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "vercel-clone",
      Key: fileName,
    })
    .promise();

  console.log(response);
};
