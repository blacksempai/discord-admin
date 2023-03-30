import Form from 'react-bootstrap/Form';
import classes from './Economy.module.css';
import sharedClasses from '../Shared.module.css'
import Accordion from 'react-bootstrap/Accordion';
import ConfirmModal from '../../../../shared/ConfirmModal/ConfirmModal.jsx';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Economy() {
    let [showDisableModal, setShowDisableModal] = useState(false);
    let [showSaveAlert, setShowSaveAlert] = useState(false);
    let [currencyName, setCurrencyName] = useState('Cludy Currency');
    const { id } = useParams();
    const navigate = useNavigate()

    const handleClose = (isConfirm) => {
        setShowDisableModal(false);
        if(isConfirm) {
            axios.put('/plugins', {data: {guildId: id, economy: false}})
                .then(() => navigate('/dashboard/'+id));
        }
    }

    const handleCurrencyNameChange = (event) => {
        setCurrencyName(event.target.value);
    }

    const saveChanges = () => {
        axios.post('/plugins/economy/currency', {data: {guildId: id, currency: currencyName}}).then();
    }

    return (
        <div className={classes.economy}>
            <ConfirmModal show={showDisableModal}
                    handleClose={handleClose} 
                    title='Disable the plugin?'/>
            <div className={sharedClasses.header}>
                <div className={sharedClasses.intro}>
                    <h2 className={sharedClasses.title}>Economy</h2>
                    <p className={sharedClasses.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt explicabo porro molestias est dolorum iusto accusamus, eum nobis? Ullam pariatur exercitationem magni, unde repellendus consectetur placeat. Nisi possimus tempore quibusdam?</p>
                </div>
                <div>
                    <Form.Check 
                        className={sharedClasses.input}
                        reverse
                        type="switch"
                        id="custom-switch"
                        checked
                        label="Active"
                        onClick={() => setShowDisableModal(true)}
                    />
                </div>
            </div>
            <div className={classes.main}>
            <Form onChange={event => setShowSaveAlert(true)}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Customise your currency</Accordion.Header>
                        <Accordion.Body>
                            <div className={classes.currency_body}>
                                <div className={classes.currency_body_left}>
                                
                                </div>
                                <div className={classes.currency_body_right}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Currency name</Form.Label>
                                            <Form.Control type="text" placeholder="Currency name" className={classes.small_input} value={currencyName} onChange={handleCurrencyNameChange}/>
                                            <Form.Text className="text-muted">
                                                Enter the name of currency
                                            </Form.Text>
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Currency Name</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Form>
            </div>
            <Alert show={showSaveAlert} variant="success" className={classes.fixed_alert}>
                <p>
                    Changes detected Do you want to save them?
                </p>
                <Button onClick={() => {setShowSaveAlert(false); saveChanges()}} variant="outline-success">
                    Save
                </Button>
            </Alert>
        </div>
    )
}

export default Economy;