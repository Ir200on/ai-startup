const fs = require("fs-extra");
const path = require("path");

const sourceDir = path.join(__dirname, "out");
const targetDir = path.join(__dirname, "out", "ai-startup");

// Очищаємо цільову папку, якщо вона існує
fs.removeSync(targetDir);

// Створюємо цільову папку
fs.ensureDirSync(targetDir);

// Отримуємо список файлів і папок у sourceDir
const items = fs.readdirSync(sourceDir);

// Копіюємо кожен елемент, виключаючи саму папку ai-startup
items.forEach((item) => {
  if (item !== "ai-startup") {
    const srcPath = path.join(sourceDir, item);
    const destPath = path.join(targetDir, item);
    fs.copySync(srcPath, destPath, { overwrite: true });
  }
});

// Видаляємо оригінальні файли з out/, крім ai-startup/
fs.readdirSync(sourceDir).forEach((item) => {
  if (item !== "ai-startup") {
    fs.removeSync(path.join(sourceDir, item));
  }
});

console.log("Files successfully moved to out/ai-startup/");
