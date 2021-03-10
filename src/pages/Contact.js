import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


const Contact = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [opis, setOpis] = useState("")
    let [error, setError] = useState("")
    let [message, setMessage] = useState("")


    const selectName = (e) => {
        setName(e.target.value)
    }
    const selectEmail = (e) => {
        setEmail(e.target.value)
    }
    const selectOpis = (e) => {
        setOpis(e.target.value)
    }

    const Submit = (e) => {
        e.preventDefault()

        if (email.indexOf('@') !== -1) {
            setName("")
            setEmail("")
            setOpis("")
            setError("")
            setMessage("Twoja wiadomość została wysłana")
        } else {
            setError("Prosimy o podanie poprawnego adresu e-mail")
        }
    }
    return (
        <div className="contact__main">
            <h1 className="contact__title">W przypadku uwag lub pytań prosimy o kontakt
                mailowy na adres flowers@wp.pl lub o wypełnienie formularza:</h1>
            <h2 className="contact__desk">______</h2>
            <div className="contact__body">
                <div className="contact__image">
                </div>
                <div className="contact">
                    <form onSubmit={Submit} noValidate className="contact__form">
                        <div className="contact__text">
                            <TextField id="outlined-basic"
                                       variant="outlined"
                                       label="Twoje imię:"
                                       style={{maxWidth: "1000px", width: "80%", background: "white"}}
                                       value={name}
                                       onChange={e => selectName(e)}/>
                        </div>
                        <div className="contact__text">
                            <TextField id="outlined-basic"
                                       variant="outlined"
                                       label="Twój adres e-mail:"
                                       style={{maxWidth: "1000px", width: "80%", background: "white"}}
                                       value={email}
                                       onChange={e => selectEmail(e)}/>
                            <h1> {error}</h1>
                        </div>
                        <div className="contact__text">
                            <TextField id="outlined-basic"
                                       variant="outlined"
                                       label="Twoja wiadomość:"
                                       style={{maxWidth: "1000px", width: "80%", background: "white"}}
                                       value={opis}
                                       onChange={e => selectOpis(e)}/>
                        </div>
                        <div className="contact__btn__section">
                            <Button type="submit" variant="contained" color="primary"
                                    className="contact__button">Wyślij</Button> <h1
                            className="contact__answer">{message}</h1>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;