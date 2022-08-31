import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Hamilton from '../assets/hamilton.jpg';

const Post = () => {
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title='Lewis Hamilton'
          subheader='September 31, 2022'
        />
        <CardMedia
          component='img'
          height='20%'
          image={Hamilton}
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            ‘Still I Rise’ – these are the words emblazoned across the back of
            Lewis Hamilton’s helmet and tattooed across his shoulders, and ever
            since annihilating expectations with one of the greatest rookie
            performances in F1 history in 2007, that’s literally all he’s done:
            risen to the top of the all-time pole positions list ahead of his
            hero Ayrton Senna, surged into first place in the wins column
            surpassing the inimitable Michael Schumacher, and then matched the
            legendary German’s seven world titles.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
