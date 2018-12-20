import React, {Component} from 'react';
import {Typography,Divider} from "@material-ui/core";
import withLayout from '../../components/Layout';

const lab1 = () => (
    <div className="page">
        <Typography variant="h4" gutterBottom>
            Лабораторная работа #1
        </Typography>
        <Divider/>
        <div className="page__content">
            <Typography variant="title" gutterBottom>
                Создание персональной страницы-отчета на github и работа с git
            </Typography>
            <Typography variant="body1" gutterBottom>
                <a href="https://github.com/EgorZotov">Мой профиль на GitHub</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <a href="https://it-landing.egorzotov.work">Страница-отчёт</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <a href="#">Исходный код в репозитории inet-2018</a>
            </Typography>
        </div>
    </div>
);

export default withLayout(lab1)