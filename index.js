import express from "express";
import fs from "fs";
import path from "path";
const app = express();

const PORT = 3002;

app.use(express.json());

app.use(express.static("public"));

app.use("/", async (request, response) => {
  let directory_name = "c:/";
  let filenames = fs.readdirSync(directory_name);

  response.write(
    `<html style="background-color: #171717; font-family: arial;"><head></head><body>`
  );
  response.write(
    `<h1 style="color: #DA0037;">Files and Folders in ${directory_name.toUpperCase()}</h1><hr><br/><div style="line-height: 35px;">`
  );
  filenames.forEach((file) => {
    if (path.extname(file) == "") {
      response.write(
        `<span style="font-size:16px; color: #E8F0F2"><img src="/images/folder.PNG" width="13px">&ensp;${file}</span><br/>`
      );
    } else {
      response.write(
        `<span style="font-size:16px; color: #EDEDED"><img src="/images/document.PNG" width="13px">&ensp;${file}</span><br/>`
      );
    }
  });
  response.end("</div></body></html>");
});

app.listen(PORT, () => {
  console.log(`Running @ Port ${PORT}...`);
});
