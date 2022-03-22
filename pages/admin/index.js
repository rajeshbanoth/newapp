import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import PostAddIcon from '@mui/icons-material/PostAdd';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CategoryIcon from '@mui/icons-material/Category';
import TagIcon from '@mui/icons-material/Tag';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const AdminIndex = () => {
    const features = [
        {
            heading: "Create Category",
            link: '/admin/crud/category-tag',
            icons: <CategoryIcon  color={'primary'} style={{ fontSize: '60px' }} fontSize='large' />,

        },

        {
            heading: "Create Tag",
            link: '/admin/crud/category-tag',
            icons: <TagIcon  style={{ color: '#DAFF33', fontSize: '60px' }} fontSize='large' />,

        },
        {
            heading: "Create Blog",
            link: '/admin/crud/blog',
            icons: <PostAddIcon style={{ color: '#0F9D58', fontSize: '60px' }} fontSize='large' />,

        },
        {
            heading: "Update/Delete Blog",
            link: '/admin/crud/blogs',
            icons: <ModeEditIcon  style={{ color: '#DB4437', fontSize: '60px' }} fontSize='large' />,

        },
        {
            heading: "Update Profile",

            link: '/user/update',
            icons: <ManageAccountsIcon style={{ color: '#F4B400', fontSize: '80px' }} fontSize='large' />,

        },

    ]


    return (


        <Layout>
            <Admin>

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
            <Typography variant='h4' fontWeight={500}>Admin Dashboard</Typography>
          

            </div>

    

            <div className="container-fluid">
                <div className="row">

                    {features.map((item,i) => (
                        <div key={i} className="col-md-4">
                            <div  style={{padding:'10px'}}>

                                <Card sx={{ maxWidth: 345,display: 'flex',  justifyContent:'center', alignItems:'center',}} >
                                    <div >
                                    <CardActionArea href={item.link} >
                                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
                                        <CardMedia
                                        >                                       
                                            {item.icons}
                                        </CardMedia>
                                        </div>
 
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.heading}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>

</div>
                                </Card>

                            </div>
                        </div>
                    ))}



                </div>
            </div>

            {/* <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/admin/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">right</div>
                    </div>
                </div>
            </Admin> */}

</Admin>
        </Layout>
    );
};

export default AdminIndex;
