import Link from '@mui/material/Link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';


import ReactRoundedImage from "react-rounded-image";

import Stack from '@mui/material/Stack';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  


const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (



            // <Link key={i} href={`/categories/${c.slug}`}>
            //     <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            // </Link>

      <Chip  style={{padding:'10px'}} label={c.name} component="a" href={`/categories/${c.slug}`} clickable   color="primary" variant="outlined"/>
   
  
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            // <Link key={i} href={`/tags/${t.slug}`}>
            //     <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            // </Link>

            
         
      <Chip style={{padding:'10px'}} label={t.name} component="a" href={`/tags/${t.slug}`}clickable   color="secondary" variant="outlined"/>
   
 
        ));

    return (

        <>

<Paper elevation={24}

      sx={{
        p: 2,
        margin: 'auto',
        width:'100%',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          borderRadius:'10px'
      }}
     
    >
      <Grid container spacing={2}>
        <Grid item>
        
            {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
            <ReactRoundedImage
          image={`${API}/blog/photo/${blog.slug}`}
          roundedColor="#66A5CC"
          imageWidth="250"
          imageHeight="250"
          roundedSize="0"
          borderRadius="0"
        />
         
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography  gutterBottom variant="subtitle1" component="div">

              <Typography   variant='h5' >
                <Link  underline="none" style={{color:'#9c27b0',fontWeight:"800"}}  href={`/blogs/${blog.slug}`}>
                {blog.title}
                </Link>  


              
             </Typography>
              </Typography>
              <Typography style={{color:'#595855'}} variant="body2" gutterBottom>
              Written by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.username}</a>
                    </Link>{' '}
                    | Published {moment(blog.updatedAt).fromNow()}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
              <section >
                  
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
            

                <br />
            </section>
             
              </Typography>


              <Typography variant="body1" style={{color:'#595855',paddingTop:'10px'}}>
              {renderHTML(blog.excerpt)}
              </Typography>
            </Grid>
            <Grid item>

            
              <Typography sx={{ cursor: 'pointer' }} variant="body2">

<Button  variant='outlined' style={{color:'#9c27b0'}}  href={`/blogs/${blog.slug}`}>Read More  <ArrowRightAltIcon /> </Button>

              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>

        {/* <div className="lead pb-4">
            <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold"></h2>
                    </a>
                </Link>

                <Typography  style={{color:'#242e40'}}  href={`/blogs/${blog.slug}`} variant='h4' fontWeight={500}>
                <Link href={`/blogs/${blog.slug}`}>
                {blog.title}
                </Link>
                    
                    </Typography>
            </header>
            <section>
                <p className="mark ml-1 pt-2 pb-2">
                    Written by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.username}</a>
                    </Link>{' '}
                    | Published {moment(blog.updatedAt).fromNow()}
                </p>
            </section>
            <section>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
                <br />
                <br />
            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
 


<ReactRoundedImage
          image={`${API}/blog/photo/${blog.slug}`}
          roundedColor="#66A5CC"
          imageWidth="210"
          imageHeight="210"
          roundedSize="8"
          borderRadius="15"
        />
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        <div className="pb-3">{renderHTML(blog.excerpt)}</div>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-primary pt-2">Read more</a>
                        </Link>
                    </section>
                </div>
            </div>
        </div> */}

        </>
    );
};

export default Card;
