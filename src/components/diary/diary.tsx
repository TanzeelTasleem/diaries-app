import { Box, Button, createStyles, Drawer, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { GET_DIARY } from '../../features/diaries/diariesSlice';
import { Diary } from '../../interfaces/diary.interface';
import { DairyModal } from '../modal/modal';

const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            //   [theme.breakpoints.down('md')] :{
            //       width : drawerWidth - 50
            //   }
        },
        drawerPaper: {
            width: drawerWidth,
            padding: "20px"
        },
        // toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(5),
            paddingLeft: "50px"
        },
        btn: {
            textTransform: "capitalize",
            // color : "white",
            fontWeight: 600,
            borderRadius: "15px",
            // boxShadow : "none"
            // backgroundColor : "#253ce8"
        },
        title: {
            fontWeight: 600,
            textTransform: "capitalize",
        }
    }),
);

export const DiaryList = () => {
    const [open, setOpen] = useState<boolean>(false)
    const classes = useStyles()
    const diaries = useSelector(GET_DIARY)
    const handleOpen = () => {
        setOpen(false)
    }
    return (
        <Box>
            <DairyModal open={open} handleClose={handleOpen} />
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <Button variant="contained" color="primary" className={classes.btn} onClick={() => { setOpen(!open) }}>create new</Button>
                    {diaries.length > 0 &&
                        ( diaries.map((diary : Diary)=>{
                            return(
                            <Box display="flex" flexDirection="column" boxShadow={5} mt={2} borderRadius="15px" >
                                <Box p={3}>
                                  <Typography variant="h5" className={classes.title}>{diary.subject}</Typography>
                                    <p>1 saved entries</p>
                                    <Box display="flex" justifyContent="space-between">
                                        <Button variant="contained" color="primary" className={classes.btn}>add new entry</Button>
                                        <Button variant="contained" color="primary" className={classes.btn}>veiw All </Button>
                                    </Box>
                                </Box>
                            </Box>
                        )})
                            
                        )

                    }

                </Drawer>
                <div className={classes.content}>
                </div>
            </div>
        </Box>

    )
}
