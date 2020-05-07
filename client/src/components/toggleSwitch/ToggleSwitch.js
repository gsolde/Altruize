import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function ToogleSwitch ({ toggleChecked, checked }) {

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch size="small" color="secondary" checked={checked} onChange={toggleChecked} />}
        color="primary"
        value="start"
        label={checked ? 'NGO' : 'User'}
        labelPlacement="bottom"
      />
    </FormGroup>
  );
}
