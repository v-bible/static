import fsPromise from 'node:fs/promises';
import path from 'node:path';

const generateVersionList = async (baseDir) => {
  const origin = (
    await fsPromise.readdir(baseDir, {
      withFileTypes: true,
    })
  ).filter((d) => d.isDirectory());

  const versions = (
    await Promise.all(
      origin.map(async (o) => {
        const code = (
          await fsPromise.readdir(path.join(baseDir, o.name), {
            withFileTypes: true,
          })
        ).filter((d) => d.isDirectory());
        return code.map((c) => ({ origin: o.name, code: c.name }));
      }),
    )
  ).flat();

  await fsPromise.writeFile(
    path.join(baseDir, 'metadata.json'),
    JSON.stringify(versions, null, 2),
  );
};

export { generateVersionList };
