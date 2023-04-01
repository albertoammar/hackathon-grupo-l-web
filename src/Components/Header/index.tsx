import React from 'react';
import './index.css';
import ToggleSwitch from "../Toggle/index";
import { Button, TextField, Typography } from "@mui/material";
import Colors from '../../Utils/Common/Colors';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <Typography variant="h1" color={Colors.PrimaryLight}>
                    Video Training
                </Typography>

                <nav>
                    <TextField
                        id="filled-basic"
                        label="Pesquisar"
                        variant="filled"
                        type="search"
                        size="small"
                    /> &nbsp;
                    <Button variant="contained" size="large">
                        <SearchOutlinedIcon />
                    </Button>
                </nav>
                <div>
                    <p>Dark</p>
                    <ToggleSwitch />
                </div>
            </div>
        </header>
    )
}