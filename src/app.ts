import { prompt } from 'inquirer';
import { questionList } from './questions';
import os from 'os'

(async () => {
  const { featureList } = await prompt(questionList);
  console.log({ platform: os.platform() })
  console.log({ featureList });
})();
