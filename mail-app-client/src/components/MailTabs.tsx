import React, {MouseEvent} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AirplayIcon from '@material-ui/icons/Airplay';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default function MailTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: any, newValue : any) => {
    setValue(newValue);
  };

  return (
    <Paper >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        
      >
        <Tab  icon={<AirplayIcon  />} style={{verticalAlign: 'middle'}} label="Primary"   />
        <Tab label="Social"  icon={<PeopleAltIcon/>} />
        <Tab label="Promotion" icon={<LocalOfferIcon/>} />
      </Tabs>
    </Paper>
  );
}
