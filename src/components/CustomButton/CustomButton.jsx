import { Button, CircularProgress } from '@mui/material'
import React from 'react'

function CustomButton({ isRequestSent, disableDecision, text, onClick, variant = "contained" }) {
    return (
        <div>
            <Button
                onClick={onClick}
                type="submit"
                variant={variant}
                color={"primary"}
                fullWidth
                disabled={disableDecision}
            >
                {
                    isRequestSent ?
                        <CircularProgress
                            size={25}
                            color="#fff" />
                        :
                        text
                }
            </Button>
        </div>
    )
}

export default CustomButton
