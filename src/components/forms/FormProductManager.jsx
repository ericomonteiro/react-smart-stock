import React, { useState } from 'react';
import { FormControl, TextField, Button, Container, Typography, InputLabel, InputAdornment, OutlinedInput, CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Product from '../../model/Product';
import ProductService from '../../service/ProductService';


function FormProductManager() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState([]);
    const [formProcessing, setFormProcessing] = useState(false);

    const callbackForm = function(result) {
        setFormProcessing(false);
        if (!result) {
            setErrors(["Erro inesperado"]);
            return
        }

        if (result.status == 200 || result.status == 201) {
            clearForm();
            return;
        } 

        if (result.status >= 400 || result.status < 500) {
            result.json()
            .then(
                (r) => {setErrors(r.errors.map(e => e.message));}
            )                
        } else {
            setErrors(["Erro inesperado"]);
        }                    
    }
    
    const onSubmit = function(event) {
        setFormProcessing(true);
        let product = new Product(parseInt(id), name, details, parseFloat(price), 0);
        ProductService.insertProduct(product, callbackForm);
        event.preventDefault();
    }

    const clearForm = function() {
        setId(0);
        setName("");
        setDetails("");
        setPrice(0);
        setErrors([]);        
    }

    return (
        <Container>
            <Typography variant="h3" component="h1" align="center">Cadastro de produtos</Typography>
            {renderErrors(errors)}
            <form onSubmit={onSubmit}>            
                <TextField 
                    id="name"
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
                <TextField
                    id="details"
                    label="Detalhes"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={details}
                    onChange={(event) => setDetails(event.target.value)}
                />            
                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="price">Preço</InputLabel>
                    <OutlinedInput
                        id="price"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <Button type="submit" variant="contained" color="primary" disabled={formProcessing}>
                        Cadastrar
                    </Button>
                </FormControl>

                {renderLoading(formProcessing)}
            </form>
        </Container>
    )
}

function renderErrors(errors) {
    console.log(errors);
    if (errors.length > 0) {
        return errors.map((e, index) => <Alert key={index} severity="error">{e}</Alert>)        
    } else {
        return null;
    }
}

function renderLoading(formProcessing) {
    if (formProcessing) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress />
            </div>
            );
    } else {
        return null
    }
}

export default FormProductManager;