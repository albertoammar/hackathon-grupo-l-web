import React from 'react';
import './index.css';
import ToggleSwitch from "../Toggle/index";
import { Button, TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className='logo'>
                    <h1>Video Training</h1>
                </div>

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