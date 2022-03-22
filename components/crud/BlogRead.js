import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import FilterListIcon from '@mui/icons-material/FilterList';
import Chip from '@mui/material/Chip';

const BlogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const [filter,setfilter]=useState('')
    const [duplicateblog,setduplicateblog]=useState([])
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
                setduplicateblog(data)

                console.log(data)
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const handlechangefilter =(e)=>{
  
 
        if(e.target.value!=''||e.target.value.length===0||e.target.value===" " )
        {

            let updatedblogs = duplicateblog

            updatedblogs = updatedblogs.filter(item => {
                      return item.title.toLowerCase().indexOf(
                        e.target.value.toLowerCase()
                      ) !== -1;
                    });

                    setBlogs(updatedblogs)
                    setfilter(e.target.value)
              
        }
      
        else{
            console.log(duplicateblog)
            setBlogs(duplicateblog)

        }




    }

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (

<Chip label="Update" component="a"  href={`/user/crud/${blog.slug}`} clickable />
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (

<Chip label="Update" component="a" href={`/admin/crud/${blog.slug}`} clickable />
            );
        }
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                // <div key={i} className="pb-5">
                //     <h3>{blog.title}</h3>
                //     <p className="mark">
                //         Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
                //     </p>
                //     <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                //         Delete
                //     </button>
                //     {showUpdateButton(blog)}
                // </div>

                <div key={i} className="col-md-4">
                <div  style={{padding:'10px'}}>
                <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small"   style={{color:'#DB4437'}} onClick={() => deleteConfirm(blog.slug)}>Delete</Button> */}
       
        <Chip
        style={{color:'#DB4437'}}
  label="Delete"
  onClick={() => deleteConfirm(blog.slug)}
  
/>
       
        {showUpdateButton(blog)}
      </CardActions>
    </Card>

                </div>
            </div>              

            );
        });
    };

    return (
        <React.Fragment>


            <div className="container-fluid">
                <div>
                    <InputBase 
                    style={{border:'3px solid #ccc', minWidth:"50%",height:'40px'}}
                    placeholder='Type your filter value'
                    startAdornment={<FilterListIcon fontSize="small" />}
                    onChange={handlechangefilter}
                    
                    />

                </div>

                
                    <div className="row">
                   
                    {message && <div className="alert alert-warning">{message}</div>}
                    {showAllBlogs()}
               
                        </div>
                        </div>
        </React.Fragment>
    );
};

export default BlogRead;
