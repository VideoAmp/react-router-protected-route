import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

describe("ProtectedRoute", () => {
    describe("is accessible", () => {
        it("renders component", () => {
            const tree = mount(
                <MemoryRouter
                    initialEntries={["/"]}
                    initialIndex={1}
                    keyLength={null}
                >
                    <Switch>
                        <ProtectedRoute
                            isAccessible
                            redirectToPath="/login"
                            path="/"
                            component={() => <p>Logged in</p>}
                        />
                        <Route
                            path="/login"
                            render={() => <p>Logged out</p>}
                        />
                    </Switch>
                </MemoryRouter>,
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe("is not accessible", () => {
        it("calls for redirect", () => {
            const tree = mount(
                <MemoryRouter
                    initialEntries={["/"]}
                    initialIndex={1}
                    keyLength={null}
                >
                    <Switch>
                        <ProtectedRoute
                            isAccessible={false}
                            redirectToPath="/login"
                            path="/"
                            component={() => <p>Logged in</p>}
                        />
                        <Route
                            path="/login"
                            render={() => <p>Logged out</p>}
                        />
                    </Switch>
                </MemoryRouter>,
            );
            expect(tree).toMatchSnapshot();
        });
    });
});
