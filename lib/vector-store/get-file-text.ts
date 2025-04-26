import path from "path";
import fs from "fs";

// NOTE: Currently only supports .txt and .md files
export function getFileText(filePath: string) {
  const absoluteFilePath = path.resolve(process.cwd(), filePath);

  let fileText = "";
  if (fs.existsSync(absoluteFilePath)) {
    fileText = fs.readFileSync(absoluteFilePath, "utf8");
  } else {
    console.error(`${filePath} is not a valid path`);
  }

  return fileText;
}
