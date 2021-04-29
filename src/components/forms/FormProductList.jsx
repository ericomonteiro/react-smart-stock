import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ProductService from '../../service/ProductService';
import { Button, Container } from '@material-ui/core';

function FormProductList() {
    const [needRefresh, setNeedRefresh] = useState(true);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshButtonClick = function() { setNeedRefresh(true) }

    if (needRefresh) {
        ProductService.getAllProducts((result) => {
            setNeedRefresh(false);
            setProducts(result);
            setLoading(false);
        });
    }

    return (
        <Container>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid loading={loading} rows={products} columns={columns} pageSize={5} checkboxSelection />
            </div>
            <Button onClick={() => refreshButtonClick()} >Atualizar</Button>
        </Container>
      );
}

const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'details', headerName: 'Detalhes', width: 500 },
        { field: 'price', headerName: 'Preço', type: 'number', width: 90},
        { field: 'stock', headerName: 'Estoque', type: 'number', width: 160}
      ];
  
export default FormProductList