import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import LabelIcon from '@material-ui/icons/Label';
import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    border:'1px solid #ccc'
    },
  }),
);

export default function EmailList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handelCheckEmail = (d:String)=>{
    console.log(d)
  }

  const handleStatterCheck = (v:String) =>{
    console.log(v)
  }

  const handleUnreadCheck = (mailId:String)=>{
    console.log(mailId)
  }

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
            <Box>
          <ListItem  color={'#ccc'}  key={value} role={undefined} dense button  divider>
   
<Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onClick={()=>handelCheckEmail(value.toString())}

              />


<Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                icon={ <StarBorderIcon />}
                checkedIcon={<StarIcon/>}
onClick={()=>handleStatterCheck(value.toString())}
                
              />




<Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                icon={ <LabelOutlinedIcon/>}
                checkedIcon={<LabelIcon/>}
onClick={()=>handleUnreadCheck(value.toString())}
                
              />






              <Box  display="flex" flexDirection="row"  bgcolor="background.paper"> 
                <Box m={0.5} p={1}  > TransferWise Rate Alerts!</Box>
                <Box m={0.5} p={1} textOverflow="ellipsis" whiteSpace="normal"> you now have the REAL rate at your fingertips ,You’ve just signed up for TransferWise rate alerts. You’ll start getting them very soon — and they’ll help you keep track of the exchange rate. yhos os the simple testin </Box>
               <Box m={0.5} p={1} component='span' > 19 Nov 20</Box>
                
              </Box>

            {/* <ListItemText id={labelId} primary={'Congratulation'} />
             <ListItemText id={labelId} primary={<Typography noWrap>you now have the REAL rate at your fingertips ,You’ve just signed up for TransferWise rate alerts. You’ll start getting them very soon — and they’ll help you keep track of the exchange rate. yhos os the simple testin </Typography>} />
            */}
            {/* <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction> */}
          </ListItem>


            


          </Box>
        );
      })}
    </List>
  );
}
