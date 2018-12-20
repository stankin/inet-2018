import React, {Component} from 'react';
import {Typography,Divider} from "@material-ui/core";
import withLayout from '../../components/Layout';
import './index.scss';

const lab1 = () => (
    <div className="page">
        <Typography variant="h4" gutterBottom>
            Лабораторная работа #3
        </Typography>
        <Divider/>
        <div className="page__content">
            <Typography variant="title" gutterBottom>
                Расчет диапазонов подсетей.
            </Typography>
            <div id="container">
                <div className="table_var">
                    <table>
                        <tr>
                            <th></th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                        </tr>
                        <tr>
                            <td>Кол-во узлов</td>
                            <td>5</td>
                            <td>965</td>
                            <td>1024</td>
                        </tr>
                        <tr>
                            <td>subnet</td>
                            <td>192.168.2.0</td>
                            <td>172.16.2.0</td>
                            <td>10.10.2.0</td>
                        </tr>
                        <tr>
                            <td>mask</td>
                            <td>255.255.255.248</td>
                            <td>255.255.252.0</td>
                            <td>255.255.248.0</td>
                        </tr>
                        <tr>
                            <td>broadcast</td>
                            <td>192.168.2.7</td>
                            <td>172.16.5.255</td>
                            <td>10.10.9.255</td>
                        </tr>
                    </table>
                </div>
                <div className="text_laba">
                    <br/>ШАГ 1: Разместить на рабочем поле коммутатор и два компьютера и соединить их
                        <p><img src={require("../../images/01.jpg")}id="img"/></p>
                </div>
                <div className="text_laba">
                    <br/>ШАГ 2: Добавить на рабочее поле еще один коммутатор с двумя компьютерами и настроить адресацию
                        из другой подсети
                        <p><img src={require("../../images/02.jpg")} id="img"/></p>
                </div>
                <div className="text_laba">
                    <br/>ШАГ 3: Соединить коммутаторы между собой и проверить работоспособность сети (Не работает, так
                        как коммутаторы подсоединяются только к маршрутизаторам)
                        <p><img src={require("../../images/03.jpg")} id="img"/></p>
                </div>
                <div className="text_laba">
                    <br/>ШАГ 4: Добавить маршрутизатор на рабочее поле
                        <p><img src={require("../../images/04.jpg")} id="img"/></p>
                </div>
                <div className="text_laba">
                    <br/>ШАГ 5: Добавить на рабочее поле еще один маршрутизатор. Подключить к нему коммутатор и компьютер
                        <p><img src={require("../../images/05.jpg")} id="img5"/></p>
                </div>
                <div className="table_var">
                    <table>
                        <tr>
                            <th>Устройство</th>
                            <th>IP - адрес</th>
                            <th>Маска</th>
                            <th>Шлюз</th>
                        </tr>
                        <tr>
                            <td>PC0</td>
                            <td>192.168.2.6</td>
                            <td>255.255.255.248</td>
                            <td>192.168.2.1</td>
                        </tr>
                        <tr>
                            <td>PC1</td>
                            <td>192.168.2.5</td>
                            <td>255.255.255.248</td>
                            <td>192.168.2.1</td>
                        </tr>
                        <tr>
                            <td>PC2</td>
                            <td>172.16.5.254</td>
                            <td>255.255.252.0</td>
                            <td>172.16.2.1</td>
                        </tr>
                        <tr>
                            <td>PC3</td>
                            <td>172.16.5.253</td>
                            <td>255.255.252.0</td>
                            <td>172.16.2.1</td>
                        </tr>
                        <tr>
                            <td>PC4</td>
                            <td>10.10.9.254</td>
                            <td>255.255.248.0</td>
                            <td>10.10.2.1</td>
                        </tr>
                        <tr>
                            <td>R0 0/0</td>
                            <td>192.168.2.1</td>
                            <td>255.255.255.248</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>R0 0/1</td>
                            <td>172.16.2.1</td>
                            <td>255.255.252.0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>R0 0/2</td>
                            <td>15.15.2.2</td>
                            <td>255.255.255.252</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>R1 0/1</td>
                            <td>10.10.2.1</td>
                            <td>255.255.248.0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>R1 0/2</td>
                            <td>15.15.2.1</td>
                            <td>255.255.255.252</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="text_laba">
                    <br/>Настройка статической маршрутизации производится при помощи команды: ip route [сеть назначения]
                        [маска] [маршрут]
                        <br/>Установить банер на сетевое оборудование: banner motd [баннер]
                            <br/><br/>Проверка работоспособности сети:
                                <p><img src={require("../../images/06.jpg")} id="img6"/>
                                    <br/>Пакеты успешно отправляются!
                                </p>
                </div>
            </div>
        </div>
    </div>
);

export default withLayout(lab1)