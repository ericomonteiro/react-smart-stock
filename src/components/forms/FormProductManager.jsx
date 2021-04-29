import React from 'react';
import { FormControl, TextField, Button, Container, Typography, InputLabel, InputAdornment, OutlinedInput } from '@material-ui/core';
import DefaultInputField from '../utils/DefaultInputField';

function FormProductManager() {
    return (
        <Container>
            <Typography variant="h3">Cadastro de produtos</Typography>
            <form>
                <DefaultInputField id="name" label="Nome" />
                <TextField
                    id="details"
                    label="Detalhes"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />            
                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel htmlFor="price">Preço</InputLabel>
                    <OutlinedInput
                        id="price"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
        </Container>
    )
}

export default FormProductManager;