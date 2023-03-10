import Container from '@mui/material/Container'
import { makeStyles } from 'tss-react/mui'
import { Outlet } from 'react-router-dom'

import Header from '../partials/Header/Header'
import useAuth from '../state/auth'

const useStyles = makeStyles() (() => {
    return {
        container: {
            padding:'100px 0'
        }
    }
})

const Default = () => {
    const { classes } = useStyles()
    
    const { user } = useAuth()

    console.log(user)

    return(
        <>
            <Header user={user} />
            <Container className={classes.container}>
                <Outlet />
            </Container>
        </>
    )
}

export default Default