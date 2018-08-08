import * as React from 'react';

interface OtherViewProps {
  testProp: string;
}

export const OtherView: React.SFC<OtherViewProps> = props => (
  <div>
    {props.testProp}
  </div>
);
