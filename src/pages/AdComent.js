import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";

import Button from '@material-ui/core/Button';
import { db } from "./FirebaseConfig";

const AdComent = () => {
    const [poradki, setPoradki] = useState([])
    const [tips, setTips] = useState("")

    useEffect( ()=> {
        getTips()
    },[])

    function getTips() {
        db.collection("poradki").onSnapshot(function(querySnapshot){
            setPoradki(
                querySnapshot.docs.map((doc) => ({
                id: doc.id,
                    porady: doc.data().porady,

            }))
            );
        });
    }
    const addTips= (e) => {

        e.preventDefault();
        db.collection("poradki").add({
            porady: tips,
        })
       setTips("")
    }
    return (
        <div className="adcoment">
            <div className="adcoment__box">
                <div className="adcoment__outside">Masz poradę z którą chciałbyś się podzielić?</div>
                <div className="adcoment__inside">Dopisz ją, nikogo nie oceniamy
                </div>
                <div className="adcoment__outside">Prawdopodobnie pomogłeś komuś :-)</div>
            </div>
            <h1 className="adcoment__title">Jeżeli masz poradę, którą chciałbyś się podzielić z
                innymi użytkownikami zapisz ją poniżej: </h1>
            <h2 className="adcoment__desk">______</h2>
            <h3 className="adcoment__smalltext">Porady niezgodne z naszym Regulaminem zostaną
                usunięte przez administratora</h3>
            <form className="adcoment__form">
            <TextField id="outlined-basic"
                       variant="outlined"
                       label="Wpisz poradę"
                       style={{ width: "80vw", background: "white"}}
                       value={tips}
                       onChange={(e) => setTips(e.target.value)}/>
            <Button type="submit" variant="contained" color="primary" onClick={addTips}>Wyślij</Button>
            </form>
            <div className="adcoment__list">
                {
                    poradki.map((porady, index) => { return (<h1 key={index} className="adcoment__return">
                            {porady.porady}</h1>
                    )})
                }
            </div>
        </div>
    );
};

export default AdComent;