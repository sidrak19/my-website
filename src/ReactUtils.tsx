import * as React from 'react';

export const addDisplayName = <TProps extends object>(
  component: React.ComponentType<TProps>,
  displayName: string,
): void => {
  (component as React.ComponentType).displayName = displayName;
};
