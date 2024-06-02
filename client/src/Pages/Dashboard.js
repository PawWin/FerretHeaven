import React, {useEffect} from "react";
import {useContext,useState} from "react";
import {UserContext} from "../context/userContext";
import axios from "axios";
import {toast} from 'react-hot-toast'
import LogOutButton from "../Components/LogOut/LogOutButton";
import '../css/dashboard.css'

function Dashboard() {
    const { user } = useContext(UserContext);
    const [userAdoptions, setUserAdoptions] = useState([]);

    useEffect(() => {
        const fetchUserAdoptions = async () => {
            try {
                const response = await axios.get('/adoptions', {
                    headers: {
                        Authorization: `Bearer ${user.token}` // Include token if using headers
                    }
                });// Log the data to check its format
                console.log("Fetched adoptions:", response.data);
                setUserAdoptions(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.log(error);
            }
        };

        if (user) {
            fetchUserAdoptions();
        }
    }, [user]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/adoptions/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            setUserAdoptions(userAdoptions.filter(adoption => adoption._id !== id));
            toast.success('Adoption deleted successfully');
        } catch (error) {
            console.error("Error deleting adoption:", error);
            toast.error('Failed to delete adoption');
        }
    };

    return (
        <div className="App" style={{minHeight: '80vh', flexGrow: 1}}>
            <section className="py-3 py-md-5 py-xl-8" style={{paddingTop: "10px", minHeight: "80vh"}}>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10">
                            <div className="mb-5">
                                <h2 className="display-5 fw-bold text-center">{!!user && (user.username)} Dashboard</h2>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="mb-5">
                                <LogOutButton/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <h1>Twoje Informacje</h1>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Username</th>
                                    <th data-th="Username">{!!user && (user.username)}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Email</th>
                                    <th data-th="Email">{!!user && (user.email)}</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-10">
                            <h1>Twoje Spotkania</h1>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Spotkanie</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Hour</th>
                                    <th>Ferret</th>
                                    <th>Rezygnacja</th>
                                </tr>
                                </thead>
                                <tbody>
                                {userAdoptions.map((adoption, index) => (
                                    <tr key={adoption._id}>
                                        <th>{index}</th>
                                        <td data-th="Email">{adoption.email}</td>
                                        <td data-th="Date">{new Date(adoption.date).toLocaleDateString()}</td>
                                        <td data-th="Hour">{adoption.hour}</td>
                                        <td data-th="Ferret">{adoption.ferret}</td>
                                        <td data-th="Rezygnacja">
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(adoption._id)}
                                            >
                                                Zrezygnuj
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;