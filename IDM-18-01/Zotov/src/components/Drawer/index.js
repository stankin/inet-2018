import React, {Component, Fragment} from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import FilterOne from '@material-ui/icons/Filter1Rounded'
import FilterTwo from '@material-ui/icons/Filter2Rounded'
import FilterThree from '@material-ui/icons/Filter3Rounded'
import MoodBad from '@material-ui/icons/MoodBadRounded';
import Face from '@material-ui/icons/FaceRounded'
import AccessibleForward from "@material-ui/icons/AccessibleForwardRounded";
import {NavLink} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const styles = theme => ({

});

export const withDrawer = WrappedComponent => {
    class Drawer extends Component {
        state = {
            drawer: false
        };
        openDrawer = () => this.setState({drawer: true});
        closeDrawer = () => this.setState({drawer: false});
        render(){
            return(
                <Fragment>
                    <WrappedComponent {...this.props} openDrawer = {this.openDrawer} closeDrawer = {this.closeDrawer}/>
                    <SwipeableDrawer
                        open={this.state.drawer}
                        onClose={this.closeDrawer}
                        onOpen={this.openDrawer}
                    >
                        <div style = {{width: 250}}>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessibleForward/>
                                    {/*<Face/>*/}
                                </ListItemIcon>
                                <ListItemText primary="Зотов Егор ИДМ-18-01" />
                            </ListItem>
                            <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <FilterOne/>
                                </ListItemIcon>
                                <NavLink to="/lab-1">
                                    <ListItemText primary="Лаборатрная работа #1" />
                                </NavLink>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FilterTwo/>
                                </ListItemIcon>
                                <NavLink to="/lab-2">
                                    <ListItemText primary="Лаборатрная работа #1" />
                                </NavLink>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FilterThree/>
                                </ListItemIcon>
                                <NavLink to="/lab-3">
                                    <ListItemText primary="Лаборатрная работа #3" />
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
                        </div>
                    </SwipeableDrawer>
                </Fragment>
            )
        }
    }
    return Drawer
};

export default withDrawer;