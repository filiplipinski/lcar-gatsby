import React from 'react';

import { SvgIcon } from '@material-ui/core';

export const ExperienceIcon = ({ className }: { className?: string }) => {
  return (
    <SvgIcon className={className} style={{ fontSize: 56 }} viewBox="0 0 67 56" width="67" height="56">
      <defs>
        <image
          width="67"
          height="56"
          id="experienceSvg"
          href="data:image/png;base64,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"
        />
      </defs>
      <use href="#experienceSvg" x="0" y="0" />
    </SvgIcon>
  );
};
