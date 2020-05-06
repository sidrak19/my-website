import * as React from 'react';

export interface IBiodataEntry {
  label: string;
  value: string;
}

export const BiodataEntry: React.FC<IBiodataEntry> = ({
  label,
  value,
}) => {
  return <>
    <b>{label}</b>
    <div>{value}</div>
  </>;
};
