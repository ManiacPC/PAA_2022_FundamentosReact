import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Perfil from './components/Perfil'
import Login from './components/Login';
import Test from './components/Test';
import ListaTareas from './components/ListaTareas';
import Equipo from './components/Equipo'
import Funcion from './components/Funcion'
import Usuarios from './components/Usuarios'

import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/perfil' component={Perfil} />
            <Route path='/test' component={Test} />
            <Route path='/login' component={Login} />
            <Route path='/tareas' component={ListaTareas} />
            <Route path='/equipo' component={Equipo} />
            <Route path='/funcion' component={Funcion} />
            <Route path='/usuarios' component={Usuarios} />
      </Layout>
    );
  }
}
