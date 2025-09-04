import fs from "fs";
import path from "path";
import YAML from "yaml";

const blogAuthorsDataPath = path.join("data", "authors.yml");
const blogAuthorsDestPath = path.join("blog", "authors.yml");

const blogTagsDataPath = path.join("data", "tags.yml");
const blogTagsDestPath = path.join("blog", "tags.yml");

(async () => {
  // Write author data to blog folder
  const blogAuthorDataRaw = await readYamlFile(blogAuthorsDataPath);

  const blogAuthorData = {};
  blogAuthorDataRaw.map((author) => {
    const authorKeyName = Object.keys(author);
    blogAuthorData[authorKeyName] = author[authorKeyName];
  });

  await fs.promises.writeFile(
    blogAuthorsDestPath,
    YAML.stringify(blogAuthorData)
  );

  // Write tags data to blog folder
  const blogTagsDataRaw = await readYamlFile(blogTagsDataPath);

  const blogTagsData = {};
  blogTagsDataRaw.map((tag) => {
    const tagKeyName = Object.keys(tag);
    blogTagsData[tagKeyName] = tag[tagKeyName];
  });

  await fs.promises.writeFile(blogTagsDestPath, YAML.stringify(blogTagsData));
})();

async function readYamlFile(filepath) {
  const rawData = await fs.promises.readFile(filepath, "utf8");
  return YAML.parse(rawData);
}
