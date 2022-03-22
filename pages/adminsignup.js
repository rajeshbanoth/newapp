import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';
import React from 'react';
import AdminSignup from '../components/auth/AdminSignup';

const Signup = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <h2 className="text-center pt-4 pb-4">Signup</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <AdminSignup />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;

