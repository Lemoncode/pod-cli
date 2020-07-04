import { prompt } from 'inquirer';
import { writeFile } from 'common/fs.helpers';
import { questionList } from './questions';
import { mapFeatureListToConfig } from './mappers';

(async () => {
  const { featureList } = await prompt(questionList);
  const config = mapFeatureListToConfig(featureList);
  const podName = 'test-pod';

  await writeFile(`./${podName}/index.ts`);
  await writeFile(`${podName}/${podName}.component.tsx`);

  if (config.hasContainer) {
    await writeFile(`${podName}/${podName}.container.tsx`);
  }

  // if (config.hasApi) {
  //   await fs.promises.writeFile(`${podName}/api/${podName}.api-model.ts`, '');
  //   await fs.promises.writeFile(`${podName}/api/${podName}.api.ts`, '');
  //   await fs.promises.writeFile(`${podName}/api/${podName}.mock-data.ts`, '');
  // }

  console.log({ featureList });
})();
