import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
          Gym Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

  return (
    <div>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],

        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" sx={{textAlign:'center', color:'white'}} gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item} sx={{textAlign:'center', color:'white'}}>
                    <Link href="#" variant="subtitle1" color="text.secondary" sx={{textAlign:'center', color:'white'}}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5, textAlign:'center', color:'white' }} />
      </Container>
      {/* End footer */}
    </div>
  );
}


// import React from "react";
// import './Footer.css'

// export default function Footer() {
//   return (
//     <div className="footer-div">
//       <table className="footer-table">
//         <thead className="footer-thead">
//           <th>Healthy living</th>
//           <th>Services</th>
//           <th>Programms</th>
//         </thead>
//         <tbody>
//           <td>
//             Lorem <br />
//             Lorem ipsum
//             <br />
//             Lorem <br />
//             Lorem ipsum
//             <br />
//           </td>

//           <td>
//             Lorem <br />
//             Lorem ipsum
//             <br />
//             Lorem <br />
//             Lorem ipsum
//             <br />
//           </td>

//           <td>
//             Lorem <br />
//             Lorem ipsum
//             <br />
//             Lorem <br />
//             Lorem ipsum
//             <br />
//           </td>
//         </tbody>
//       </table>
//     </div>
//   );
// }
