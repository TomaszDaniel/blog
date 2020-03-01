import React from 'react';

import { ListGroup, Tab, Row, Col } from 'react-bootstrap';
import ArticlesList from './ArticlesList'
import UsersList from '../components/User/UsersList'
import Creator from '../components/Article/Creator'
// import { Route, Switch } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap'

const AdminPanel = () => {

    return (
        <>
            {/* <ListGroup>
                <LinkContainer to="/admin/articlesList"><ListGroup.Item> Lista Artykułów </ListGroup.Item></LinkContainer>
                <LinkContainer to="/admin/usersList"><ListGroup.Item> Lista Użytkowników </ListGroup.Item></LinkContainer>
                <LinkContainer to="/admin/addArticle"><ListGroup.Item> Dodaj Artykuł </ListGroup.Item></LinkContainer>
            </ListGroup >

            <Switch>
                <Route path="/admin/articlesList">
                    <ArticlesList list />         
                </Route>
                <Route path="/admin/usersList">
                    <div>2222222aaaa</div>
                </Route>
                <Route path="/admin/addArticle">
                    <div>qqqqqqqqqqqqqqqqqqqqqqqq</div>
                </Route>
            </Switch> */}

            <div className="mt-5">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#articlesList">
                                    Lista Artykułów
                             </ListGroup.Item>
                                <ListGroup.Item action href="#usersList">
                                    Lista Użytkowników
                              </ListGroup.Item>
                                <ListGroup.Item action href="#addArticle">
                                    Dodaj Artykuł
                            </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#articlesList">
                                    <ArticlesList list />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#usersList">
                                    <UsersList />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#addArticle">
                                    <Creator />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>

        </>
    )
}

export default AdminPanel