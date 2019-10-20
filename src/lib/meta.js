import deepmerge from 'deepmerge';

import { availableMetaProperties } from 'data/meta';

/**
 * getAvailableMetaProperties
 * @description Returns availableMetaProperties dataset
 */

export function getAvailableMetaProperties() {
  return availableMetaProperties;
}

/**
 * mergeMetaProperties
 * @description Attempts to merge all passed in sets of metadata
 */

export function mergeMetaProperties() {
  const propertySets = Array.from( arguments );
  const properties = {};

  // Start by looping through all sets that were provided as "n" arguments

  propertySets.forEach(( set ) => {
    // Loop through all of the available meta properties defined in data/meta
    // We essentially whitelist a property being available in this dataset

    availableMetaProperties.forEach(({ name, type } = {}) => {
      // If the set doesn't exist, don't even try to merge

      if ( !set[name]) return;

      const propertyExists = !!properties[name];

      if ( type === 'string' ) {
        properties[name] = set[name];
        return;
      }

      if ( !propertyExists && type === 'object' ) {
        properties[name] = {};
      } else if ( !propertyExists && type === 'array' ) {
        properties[name] = [];
      }

      properties[name] = deepmerge( properties[name], set[name]);
    });
  });

  return properties;
}
