import React, { PureComponent } from "react";
import mapboxgl from "mapbox-gl";
import { getFlyToData, getLayerData, getMapData, token } from "./configMap";

const style = {
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};

class MapMaBox extends PureComponent {
  mapContainer = React.createRef();
  map = null;
  id = null;
  count = 0;

  componentDidMount() {
    mapboxgl.accessToken = token;
    this.map = new mapboxgl.Map(getMapData(this.mapContainer.current));
  }

  componentDidUpdate() {
    this.renderMap();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  renderMap = () => {
    const { route } = this.props;
    if (!this.mapContainer.current) return;
    if (this.id) {
      this.map.removeLayer(this.id);
    }
    this.id = `${this.count++}`;
    this.map.addLayer(getLayerData(this.id, route));
    this.map.flyTo(getFlyToData(route[0]));
  };

  render() {
    return <div style={style} ref={this.mapContainer}></div>;
  }
}

export default MapMaBox;