import './App.css';
import {Component} from "react";
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import HomePage from './components/Home';
import About from './components/AboutComponent';
import { LEADERS } from './shared/leaders';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                <Header />
         
              <Routes>
                  <Route path='/home' element={HomePage} />
                  <Route path='/menu' element={<Menu dishes={this.state.dishes} />} />
                  <Route path='/aboutus' element={<About leaders={LEADERS} />} />

               </Routes>

                    <Footer />

                </BrowserRouter>

            </div>

        );
    }
}

export default App;
