import React, { useCallback, useState } from 'react';
import { Button, Menu, MenuItem, useTheme, useMediaQuery, Box } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { useStyles } from './CarJobTypeSelection.styles';
import { CarJobTypeEnum, CarJobTypeSelectionProps } from './CarJobTypeSelection.types';

const carJobTypeLabelMap = {
  [CarJobTypeEnum.Detailing]: 'Car detailing',
  [CarJobTypeEnum.Rent]: 'Wynajem aut',
  [CarJobTypeEnum.Modernization]: 'Modernizacja pojazdów',
};

export const CarJobTypeSelection = ({ selectedCarJobType, onSelect }: CarJobTypeSelectionProps) => {
  const styles = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuItemClick = useCallback(
    (carJobType: CarJobTypeEnum) => {
      onSelect(carJobType);
      setAnchorEl(null);
    },
    [onSelect, setAnchorEl],
  );
  const handleClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);

  if (!isDesktop) {
    return (
      <div>
        <Button
          fullWidth
          endIcon={<ExpandMore className={styles.buttonIcon} />}
          color="primary"
          variant="contained"
          size="large"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          className={styles.button}
        >
          {carJobTypeLabelMap[selectedCarJobType]}
        </Button>
        <Menu anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={handleClose}>
          <MenuItem
            selected={CarJobTypeEnum.Detailing === selectedCarJobType}
            onClick={() => handleMenuItemClick(CarJobTypeEnum.Detailing)}
          >
            {carJobTypeLabelMap[CarJobTypeEnum.Detailing]}
          </MenuItem>
          <MenuItem
            selected={CarJobTypeEnum.Rent === selectedCarJobType}
            onClick={() => handleMenuItemClick(CarJobTypeEnum.Rent)}
          >
            {carJobTypeLabelMap[CarJobTypeEnum.Rent]}
          </MenuItem>
          <MenuItem
            selected={CarJobTypeEnum.Modernization === selectedCarJobType}
            onClick={() => handleMenuItemClick(CarJobTypeEnum.Modernization)}
          >
            {carJobTypeLabelMap[CarJobTypeEnum.Modernization]}
          </MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <Box display="flex" justifyContent="center">
      <Button
        color={CarJobTypeEnum.Detailing === selectedCarJobType ? 'primary' : 'secondary'}
        onClick={() => handleMenuItemClick(CarJobTypeEnum.Detailing)}
        variant="contained"
        size="large"
      >
        {carJobTypeLabelMap[CarJobTypeEnum.Detailing]}
      </Button>
      <Box mr={2} />
      <Button
        color={CarJobTypeEnum.Rent === selectedCarJobType ? 'primary' : 'secondary'}
        onClick={() => handleMenuItemClick(CarJobTypeEnum.Rent)}
        variant="contained"
        size="large"
      >
        {carJobTypeLabelMap[CarJobTypeEnum.Rent]}
      </Button>
      <Box mr={2} />
      <Button
        color={CarJobTypeEnum.Modernization === selectedCarJobType ? 'primary' : 'secondary'}
        onClick={() => handleMenuItemClick(CarJobTypeEnum.Modernization)}
        variant="contained"
        size="large"
      >
        {carJobTypeLabelMap[CarJobTypeEnum.Modernization]}
      </Button>
    </Box>
  );
};
