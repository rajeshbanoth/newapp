import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { APP_NAME, DOMAIN, FB_APP_ID } from '../config';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../actions/category';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Index = ({ router }) => {
    const [category, setCategories] = useState([])
    useEffect(() => {

        getCategories().then(data => {
            if (data.error) {
                console.log(data.error)
                //setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
                console.log(data)
            }
        });

    }, [])

    const head = () => (
        <Head>
            <title> {APP_NAME}</title>
            <meta
                name="description"
                content="Collection of programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Collection of programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <article className="overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
             
                                <Typography color={"secondary"} fontWeight={800} variant='h1'>Next Blog</Typography>
                                
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center pt-4 pb-5">
                                <p className="lead">
                                   Welcome to the World of Blogs,News and Article
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">

                            {category.map((item,i) => (
                                <div key={i} className="col-md-4">
                                    <div className="flip flip-horizontal">
                                        <div
                                            className="front"
                                            style={{
                                                backgroundImage: `url(https://picsum.photos/150/150?random=${i} )`
                                            }}
                                        >
                                            <h2 className="text-shadow text-center h1">{item.name}</h2>
                                        </div>
                                        <div className="back text-center">
                                            <Link href={`/categories/${item.name}`}>
                                                <a>
                                                    <h3 className="h1">{item.name}</h3>
                                                </a>
                                            </Link>
                                            <p className="lead">
                                               click here to view all the content related to {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}


                            {/* <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Node</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/node">
                                            <a>
                                                <h3 className="h1">Node Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            The worlds most popular backend development tool for JavaScript Ninjas
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="flip flip-horizontal">
                                    <div
                                        className="front"
                                        style={{
                                            backgroundImage: 'url(' + '/static/images/mountain.jpg' + ')'
                                        }}
                                    >
                                        <h2 className="text-shadow text-center h1">Next</h2>
                                    </div>
                                    <div className="back text-center">
                                        <Link href="/categories/nextjs">
                                            <a>
                                                <h3 className="h1">Next Js</h3>
                                            </a>
                                        </Link>
                                        <p className="lead">
                                            A Production ready web framework for building SEO React apps
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </article>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Index);
