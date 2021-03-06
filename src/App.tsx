import React, { useCallback, useContext } from "react";
import "./App.css";
import { Card } from "antd";
import { Provider } from "./Provider";
import { Header } from "./Header";
import { Form } from "./Form";
import { Overview } from "./Overview";
import { UrlInputField, TargetInputField } from "./InputFieled";
import { DurationField } from "./DurationField";
import { SubmitBtn } from "./SubmitBtn";
import { Result } from "./Result";
import { Info } from "./Info";

const App = () => {
  return (
    <Provider>
      <Header />
      <div className="container">
        <Overview />
        <Card>
          <Form>
            <UrlInputField />
            <TargetInputField />
            <DurationField />
            <SubmitBtn />
            <Result />
            <Info />
          </Form>
        </Card>
      </div>
    </Provider>
  );
};

export default App;
