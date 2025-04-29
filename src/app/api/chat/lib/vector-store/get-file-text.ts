import fs from "fs";
import path from "path";

// NOTE: Currently only supports .txt and .md files
export function getFileText(relativePath: string) {
  const absolutePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "chat",
    "data",
    relativePath
  );

  let fileText = "";
  if (fs.existsSync(absolutePath)) {
    fileText = fs.readFileSync(absolutePath, "utf8");
  } else {
    console.error(`${absolutePath} is not a valid path`);
  }

  return fileText;
}
