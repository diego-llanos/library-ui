// import Box from '@mui/material/Box';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// import { useTheme } from '@mui/material/styles';

// const SourceCode = () => {
//     const theme = useTheme();
//   const renderCodeBlock = (code = '', language = 'jsx') => {
//     return (
//       <Box
//         component={SyntaxHighlighter}
//         language={language}
//         style={vs2015}
//         padding={`${theme.spacing(2)} !important`}
//         borderRadius={2}
//         margin={`${theme.spacing(0)} !important`}
//       >
//         {code}
//       </Box>
//     );
//   };
//     return (
//         <div className="shadow-flex sm bg-white-50  p-4 justify-between  ">
//             <pre>
//                 <Box marginTop={2}>
//                     {renderCodeBlock(`
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

// export default function SpacingGrid() {
//   const [spacing, setSpacing] = React.useState(2);
//   const classes = useStyles();

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Grid container justifyContent="center" spacing={spacing}>
//           {[0, 1, 2].map((value) => (
//             <Grid key={value} item>
//               <Paper className={classes.paper} />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <Paper className={classes.control}>
//           <Grid container>
//             <Grid item>
//               <FormLabel>spacing</FormLabel>
//               <RadioGroup
//                 name="spacing"
//                 aria-label="spacing"
//                 value={spacing.toString()}
//                 onChange={handleChange}
//                 row
//               >
//                 {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
//                   <FormControlLabel
//                     key={value}
//                     value={value.toString()}
//                     control={<Radio />}
//                     label={value.toString()}
//                   />
//                 ))}
//               </RadioGroup>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }

//                     `)}
//                 </Box>
//             </pre>
//         </div>
//     )

// }

// export default SourceCode

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (

    <React.Fragment>
      <CssBaseline />
      {/* <AppBar>
        <Toolbar>
        <Typography variant="h6">Scroll to see button</Typography>
        </Toolbar>
      </AppBar> */}
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>
          {[...new Array(20)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
