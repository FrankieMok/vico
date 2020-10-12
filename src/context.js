import React, { Component } from "react";
import items from "./data";

const StoreContext = React.createContext();

class StoreProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    loading: true,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    console.log(rooms);

    this.setState({
      rooms,
      featuredRooms: rooms.filter((room) => room.featured === true),
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images: images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <StoreContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

const StoreConsumer = StoreContext.Consumer;

export { StoreProvider, StoreConsumer, StoreContext };
