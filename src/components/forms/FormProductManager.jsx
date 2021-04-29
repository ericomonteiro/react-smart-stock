import React, { useState } from 'react';
import { FormControl, TextField, Button, Container, Typography, InputLabel, InputAdornment, OutlinedInput } from '@material-ui/core';
import Product from '../../model/Product';
import ProductService from '../../service/ProductService';

function FormProductManager() {    
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState(0);

    const onSubmit = function(event) {              
        let product = new Product(parseInt(id), name, details, parseFloat(price), 0);
        console.log(product);
        ProductService.insertProduct(product);
        event.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h3" component="h1" align="center">Cadastro de produtos</Typography>
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
                    <Button type="submit" variant="contained" color="primary">
                        Cadastrar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default FormProductManager;