import React, {Component} from 'react';
import {Typography,Divider, List, ListItem} from "@material-ui/core";
import withLayout from '../../components/Layout';

const lab1 = () => (
    <div className="page">
        <Typography variant="h4" gutterBottom>
            Подготовка к экзамену
        </Typography>
        <Divider/>
        <div className="page__content">
            <List>
                <Divider/>
                <ListItem component="a" target="_blank" href="https://docs.google.com/spreadsheets/d/1iZ7gLvnKfSx3TUTjl_-gCtDQ66B1JlkO4WZaMj6R0sw/edit#gid=1373642912&range=AB14">
                    Результат теста "Инновации": 86%
                </ListItem>
                <Divider/>
                <ListItem component="a" target="_blank" href="https://docs.google.com/spreadsheets/d/1iZ7gLvnKfSx3TUTjl_-gCtDQ66B1JlkO4WZaMj6R0sw/edit#gid=1682100065&range=AD14">
                    Результат теста "Проекты": 83%
                </ListItem>
                <Divider/>
                <ListItem component="a" target="_blank" href="https://github.com/stankin/inet-2018/wiki/%D0%91%D0%B8%D0%BB%D0%B5%D1%82-%2328">
                    Ответ на билет 19
                </ListItem>
                <Divider/>
            </List>
        </div>
    </div>
);

export default withLayout(lab1)