import React, { useCallback, useState } from 'react';
import { Button, Menu, MenuItem, useTheme, useMediaQuery, Box } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { useStyles } from './CarJobTypeSelection.styles';
import { CarJobTypeEnum } from './CarJobTypeSelection.types';

const carJobTypeLabelMap = {
  [CarJobTypeEnum.Detailing]: 'Car detailing',
  [CarJobTypeEnum.Rent]: 'Wynajem aut',
  [CarJobTypeEnum.Modernization]: 'Modernizacja pojazdów',
};

export const CarJobTypeSelection = () => {
  const styles = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [selectedCarJobType, setSelectedCarJobType] = React.useState<CarJobTypeEnum>(CarJobTypeEnum.Detailing);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuItemClick = useCallback((carJobType: CarJobTypeEnum) => {
    setSelectedCarJobType(carJobType);
    setAnchorEl(null);
  }, []);

  const handleClose = () => useCallback(() => setAnchorEl(null), []);

  const isBtnSelected = useCallback((carJobType: CarJobTypeEnum) => carJobType === selectedCarJobType, []);

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
            selected={selectedCarJobType === CarJobTypeEnum.Detailing}
            onClick={() => handleMenuItemClick(CarJobTypeEnum.Detailing)}
          >
            {carJobTypeLabelMap[CarJobTypeEnum.Detailing]}
          </MenuItem>
          <MenuItem
            selected={selectedCarJobType === CarJobTypeEnum.Rent}
            onClick={() => handleMenuItemClick(CarJobTypeEnum.Rent)}
          >
            {carJobTypeLabelMap[CarJobTypeEnum.Rent]}
          </MenuItem>
          <MenuItem
            selected={selectedCarJobType === CarJobTypeEnum.Modernization}
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
      <Button color="secondary" variant="contained" size="large">
        {carJobTypeLabelMap[CarJobTypeEnum.Detailing]}
      </Button>
      <Box mr={2} />
      <Button color="secondary" variant="contained" size="large">
        {carJobTypeLabelMap[CarJobTypeEnum.Rent]}
      </Button>
      <Box mr={2} />
      <Button color="secondary" variant="contained" size="large">
        {carJobTypeLabelMap[CarJobTypeEnum.Modernization]}
      </Button>
    </Box>
  );
};
