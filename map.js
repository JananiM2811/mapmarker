let arr = [[77.19133549, 11.0241], [77.024781, 10.997041]];
function createMapmarker() {
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[77.19133549, 11.0241] ,
    zoom: 12,
  });
  const marker=new mapboxgl.Marker().setLngLat(arr[0]).addTo
  for (let i = 0; i < arr.length; i++) {
    let coordinates=arr[i]
    setTimeout(()=> {
       new mapboxgl.Marker({
        color: "#f61515ff",
        draggable: true;
      }).setLngLat(coordinates)
        .addTo(map);
    }, 1000);
  }
}

  // Do not edit the code below
  window.onload = createMapmarker;
  