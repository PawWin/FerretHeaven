import React, { useState , useEffect} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";

function Adoption(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        date:'',
        hour:'',
        ferret:'',
        email:''
    })
    const noteAdoption = async (e) => {
        e.preventDefault()
        const {date,hour,ferret,email} = data
        try{
            const {data}= await axios.post('/adopt', {
                date,
                hour,
                ferret,
                email
            });
            if(data.error){
                toast.error(data.error)
            } else {
                setData({});
                toast.success('Spotkanie Zarezerwowane. Śmiało przeglądaj dalej!')
                navigate('/dashboard')
            }
        }catch (err){
            console.log(err)
        }
    }
    return(
        <div className="App">
            <section className="py-3 py-md-5 py-xl-8" style={{paddingTop: "10px", minHeight: "80vh"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-5">
                                <h2 className="display-5 fw-bold text-center">Rejestracja Spotkania z Fretka</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row gy-5 justify-content-center">
                                <div className="col-12 col-lg-5">
                                    <form onSubmit={noteAdoption}>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email"
                                                           className="form-control border-0 border-bottom rounded-0"
                                                           name="email" id="email" placeholder="name@example.com"
                                                           required
                                                           onChange={(e) => setData({...data, email: e.target.value})}/>
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <select id="ferrets" name="ferrets" value={data.ferret}
                                                            className="form-control border-0 border-bottom rounded-0"
                                                            onChange={(e) => setData({...data, ferret: e.target.value})}
                                                            required>
                                                        <option value="none"></option>
                                                        <option value="Borys">Borys</option>
                                                        <option value="Kamila">Kamila</option>
                                                        <option value="Andrzej">Andrzej</option>
                                                        <option value="Bogumil">Bogumił</option>
                                                        <option value="Asia">Asia</option>
                                                        <option value="Ola">Ola</option>
                                                        <option value="Gucio">Gucio</option>
                                                        <option value="Julcio">Julcio</option>
                                                        <option value="Julcio">Julcio</option>
                                                        <option value="Janusz">Janusz</option>
                                                        <option value="Kuba">Kuba</option>
                                                        <option value="Kasia">Kasia</option>
                                                        <option value="Kot">Kot</option>
                                                    </select>
                                                    <label htmlFor="ferrets" className="form-label">Fretka</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="date"
                                                           className="form-control border-0 border-bottom rounded-0"
                                                           name="date" id="date" required
                                                           onChange={(e) => setData({...data, date: e.target.value})}/>
                                                    <label htmlFor="date" className="form-label">Data</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <select id="hours" name="hours" value={data.hour}
                                                            className="form-control border-0 border-bottom rounded-0"
                                                            onChange={(e) => setData({...data, hour: e.target.value})}
                                                            required>
                                                        <option value="none"></option>
                                                        <option value="10:00">10:00</option>
                                                        <option value="10:30">10:30</option>
                                                        <option value="11:00">11:00</option>
                                                        <option value="11:30">11:30</option>
                                                        <option value="12:00">12:00</option>
                                                        <option value="12:30">12:30</option>
                                                        <option value="13:00">13:00</option>
                                                        <option value="13:30">13:30</option>
                                                        <option value="14:00">14:00</option>
                                                        <option value="14:30">14:30</option>
                                                        <option value="15:00">15:00</option>
                                                        <option value="15:30">15:30</option>
                                                        <option value="16:00">16:00</option>
                                                        <option value="16:30">16:30</option>
                                                        <option value="17:00">17:00</option>
                                                        <option value="17:30">17:30</option>
                                                    </select>
                                                    <label htmlFor="hours" className="form-label">Godzina</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-lg btn-dark rounded-0 fs-6"
                                                            type="submit">Zarezerwuj Spotkanie </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Adoption