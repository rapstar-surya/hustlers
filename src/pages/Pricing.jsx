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

import './Pricing.css'
import Navbar from '../components/Navbar';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  return (
    <React.Fragment >
      <div>
        <Navbar/>
      </div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none', color:'white'} }} />
      <CssBaseline />
     
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6, color:'white'}}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{color:'white'}}
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{color:'white'}}>
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" sx={{color:'white'}}>
        <Grid container spacing={5} alignItems="flex-end" sx={{color:'white'}}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
              sx={{color:'white'}}
            >
              <Card sx={{color:'white'}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  // sx={{
                  //   backgroundColor: (theme) =>
                  //     theme.palette.mode === 'light'
                  //       ? theme.palette.grey[200]
                  //       : theme.palette.grey[700],
                  // }}
                  sx={{color:'white'}}
                />
                <CardContent sx={{color:'white'}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                      color:'white'
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary" sx={{color:'white'}}>
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{color:'white'}}>
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        sx={{color:'white'}}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions sx={{color:'white'}}>
                  <Button fullWidth variant={tier.buttonVariant} >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}