import { Config } from 'core/constants';

export const mapFeatureListToConfig = (featureList: string[]): Config =>
  featureList.reduce(
    (config, feature) => ({
      ...config,
      [feature]: true,
    }),
    {}
  );
