import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FilterOne from '@material-ui/icons/Filter1Rounded'
import FilterTwo from '@material-ui/icons/Filter2Rounded'
import FilterThree from '@material-ui/icons/Filter3Rounded'
import MoodBad from '@material-ui/icons/MoodBadRounded';
import AccessibleForward from "@material-ui/icons/AccessibleForwardRounded";
import {NavLink} from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

const withLayout = WrappedComponent => {
    class ResponsiveDrawer extends React.Component {
        state = {
            mobileOpen: false,
        };

        handleDrawerToggle = () => {
            this.setState(state => ({ mobileOpen: !state.mobileOpen }));
        };

        render() {
            const { classes, theme } = this.props;

            const drawer = (
                <div>
                    <div className={classes.toolbar}>
                        <ListItem>
                            <ListItemIcon>
                                <AccessibleForward/>
                                {/*<Face/>*/}
                            </ListItemIcon>
                            <ListItemText primary="Зотов Егор ИДМ-18-01" />
                        </ListItem>
                        <Divider/>
                    </div>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <FilterOne/>
                            </ListItemIcon>
                            <NavLink to="/lab-1">
                                <ListItemText primary="Лабораторная работа #1" />
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FilterTwo/>
                            </ListItemIcon>
                            <NavLink to="/lab-2">
                                <ListItemText primary="Лабораторная работа #2" />
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FilterThree/>
                            </ListItemIcon>
                            <NavLink to="/lab-3">
                                <ListItemText primary="Лабораторная работа #3" />
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <MoodBad />
                            </ListItemIcon>
                            <NavLink to="/exam">
                                <ListItemText primary="Подготовка к экзамену" />
                            </NavLink>
                        </ListItem>
                    </List>
                </div>
            );

            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                                Зотов Егор ИДМ-18-01
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer}>
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Hidden smUp implementation="css">
                            <Drawer
                                container={this.props.container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <WrappedComponent/>
                    </main>
                </div>
            );
        }
    }
    return withStyles(styles, { withTheme: true })(ResponsiveDrawer)
};

export default withLayout;