import { prompt } from 'inquirer';
import { questionList } from './questions';
(async () => {
  const { featureList } = await prompt(questionList);

  console.log({ featureList });
})();
