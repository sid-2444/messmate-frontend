import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import axios from '../axiosConfig';
import Loader from "../components/Loader";
const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {

            try {

                const res = await axios.get("/auth/profile");

                setProfile(res.data);

            } catch {

                setError("Failed to fetch profile.");

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;

    return (
        <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: .4 }}

        >
            <div className="bg-white rounded-3xl shadow-xl p-8">

                <h2 className="text-3xl font-bold mb-6">My Profile </h2>
                <div className="space-y-4">

                    <div>

                        <span className="text-slate-500">

                            Username

                        </span>

                        <p className="text-xl font-semibold">

                            {profile.username}

                        </p>

                    </div>

                    <div>

                        <span className="text-slate-500">

                            Email

                        </span>

                        <p className="text-xl font-semibold">

                            {profile.email}

                        </p>

                    </div>

                </div>

            </div>
        </motion.div>
    );
};

export default Profile;