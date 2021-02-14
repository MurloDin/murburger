import React from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/fontello/css/fontello.css";
import PreviewPage from "../pages/PreviewPage";
import MenuPage from "../pages/MenuPage";
import Header from "../Header";
import MapContainer from "../pages/DeliveryPage/DeliveryPage";
import BasketPage from "../pages/BasketPage";
import CommentForm from "../CommentForm";


const App = () => {
    return (
        <section>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <PreviewPage/>
                </Route>
                <Route path="/menu">
                    <MenuPage/>
                </Route>
                <Route path="/delivery">
                    <MapContainer/>
                </Route>
                <Route path="/basket">
                    <BasketPage/>
                </Route>
                <Route path="/comment-form">
                    <CommentForm />
                </Route>
            </Switch>
        </section>
    );
};


export default App;
