import React from "react";
import TextField from "@material-ui/core/TextField";

function DefaultInputField(props) {
    return (
        <TextField id={props.id} label={props.label} variant="outlined" margin="normal" onChange={props.onChange} value={props.value} fullWidth/>
    );
}

export default DefaultInputField;