import React, {Component} from 'react';
import {
    Typography,
    Divider,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    List,
    ListItem,ListItemText } from "@material-ui/core";
import withLayout from '../../components/Layout';

const lab1 = () => (
    <div className="page">
        <Typography variant="h4" gutterBottom>
            Лабораторная работа #2
        </Typography>
        <Divider/>
        <div className="page__content">
            <Typography variant="title" gutterBottom>
                Проектирование и разработка индивидуального или коллективного веб-приложения с использованием html,css,js + json,xml
            </Typography>
            <Card>
                <CardHeader
                    title = 'Команда "Панда"'
                    avatar={
                        <Avatar aria-label="Recipe">
                            П
                        </Avatar>
                    }
                    subheader="ИДМ-18-01">

                </CardHeader>
                <CardContent>
                    <List>
                        <Divider/>
                        <ListItem component="a" href="https://github.com/DeniskaRediska">
                            <Avatar src = "https://avatars3.githubusercontent.com/u/43181922?s=460&v=4">ГД</Avatar>
                            <ListItemText>Грязнов Д.В. (НИ, БА)</ListItemText >
                        </ListItem>
                        <Divider/>
                        <ListItem component="a" href="https://github.com/pander1c">
                            <Avatar src="https://avatars2.githubusercontent.com/u/39602217?s=460&v=4">ЗЕ</Avatar>
                            <ListItemText>Занина Е.С. (РП, ВН, НИ)</ListItemText>
                        </ListItem>
                        <Divider/>
                        <ListItem component="a" href="https://github.com/EgorZotov">
                            <Avatar src = "https://avatars3.githubusercontent.com/u/23280344?s=460&v=4">ЗЕ</Avatar>
                            <ListItemText>Зотов Е.В. (РП, СП, ПП)</ListItemText>
                        </ListItem>
                        <Divider/>
                        <ListItem component="a" href="https://github.com/Creativio">
                            <Avatar src = "https://avatars2.githubusercontent.com/u/43181919?s=400&v=4">КА</Avatar>
                            <ListItemText>Корный А.А. (АД, КО)</ListItemText>
                        </ListItem>
                        <Divider/>
                    </List>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default withLayout(lab1)