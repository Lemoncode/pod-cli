import { QuestionCollection } from 'inquirer';
import { featureKeys } from './features';

export const questionList: QuestionCollection = [
  {
    name: 'featureList',
    type: 'checkbox',
    message: 'Features to include:',
    choices: [
      {
        type: 'choice',
        name: 'Container',
        value: featureKeys.hasContainer,
        checked: true,
      },
      {
        type: 'choice',
        name: 'API',
        value: featureKeys.hasApi,
        checked: true,
      },
      {
        type: 'choice',
        name: 'Mappers',
        value: featureKeys.hasMappers,
        checked: true,
      },
      {
        type: 'choice',
        name: 'Validations',
        value: featureKeys.hasValidations,
        checked: true,
      },
      {
        type: 'choice',
        name: 'Sub components',
        value: featureKeys.hasSubComponents,
        checked: true,
      },
    ],
  },
];
