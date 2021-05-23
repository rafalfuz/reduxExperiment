import React from "react";
import App from "./App";
import Paragraph from "./Paragraph/Paragraph";
import LekcjeZUdemy from "./LekcjeZUdemy";
import { Provider } from "react-redux";
import store from "./store/store";

class Root extends React.Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Paragraph>Uczymy się Reduxa</Paragraph>
        <App lesson="0" title="Tworzenie store">
          Stan aplikacji, który możemy zmienić poprzez wywoływanie akcji i te
          akcje lądują do takiej funkcji, która nazywa sie Reducer i ona bierze
          poprzedni stan, akcje i w wyniku daje nowy stan aplikacji
        </App>
        <App lesson="1" title="Tworzenie store">
          <LekcjeZUdemy />
        </App>
      </Provider>
    );
  }
}

export default Root;
