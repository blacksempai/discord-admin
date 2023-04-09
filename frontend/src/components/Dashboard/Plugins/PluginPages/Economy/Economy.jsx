import React from 'react';
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
import InputGroup from 'react-bootstrap/InputGroup';

function Economy() {
    const [showDisableModal, setShowDisableModal] = useState(false);
    const [showSaveAlert, setShowSaveAlert] = useState(false);
    const [price, setPrice] = useState("1");
    const [validated, setValidated] = useState(false);
    const [currencyName, setCurrencyName] = useState('Cludy Currency');
    const { id } = useParams();
    const navigate = useNavigate()
    const formRef = React.createRef();

    const handleClose = (isConfirm) => {
        setShowDisableModal(false);
        if(isConfirm) {
            axios.put('/plugins', {data: {guildId: id, economy: false}})
                .then(() => navigate('/dashboard/'+id));
        }
    }

    const handleFormChange = (event) => {
        if(event.currentTarget.checkValidity() === true) {
            setShowSaveAlert(true);
        } else {
            setShowSaveAlert(false);
        }
    }

    const handleCurrencyNameChange = (event) => {
        setCurrencyName(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const saveChanges = () => {
        if (formRef.current.checkValidity() === false) {
            return;
        }
        setValidated(true);
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
            <Form onChange={handleFormChange} validated={validated} ref={formRef}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Customise your currency</Accordion.Header>
                        <Accordion.Body>
                            <div className={classes.currency_body}>
                                <div className={classes.currency_body_left}>
                                
                                </div>
                                <div className={classes.currency_body_right}>
                                        <Form.Group className="mb-3" controlId="formCurrencyName">
                                            <Form.Label>Currency name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Currency name" 
                                                className={classes.small_input} 
                                                value={currencyName} 
                                                onChange={handleCurrencyNameChange} 
                                                required/>
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
                            <Form.Group className="mb-3" controlId="formItem">
                                    <Form.Label>Price</Form.Label>
                                    <InputGroup hasValidation className='mb-3'>
                                        <Form.Control onChange={handlePriceChange}
                                            value={price}
                                            type="text" 
                                            placeholder="Enter the price" 
                                            pattern="^\d+$"
                                            isInvalid={!new RegExp(/^\d+$/).test(price.toString())}
                                            required/>
                                        <Form.Control.Feedback type="invalid">
                                            Only digits
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                    
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control value="Role" type="text" className='w-25' readOnly={true}/>
                            </Form.Group>
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