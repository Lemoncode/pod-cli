export const featureKeys = {
  hasContainer: 'hasContainer',
  hasApi: 'hasApi',
  hasMappers: 'hasMappers',
  hasValidations: 'hasValidations',
  hasSubComponents: 'hasSubComponents',
};

export interface Config {
  hasContainer?: boolean;
  hasApi?: boolean;
  hasMappers?: boolean;
  hasValidations?: boolean;
  hasSubComponents?: boolean;
}
