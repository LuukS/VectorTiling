//mapboxgl.accessToken = 'pk.eyJ1IjoibmllbmViIiwiYSI6IlR6NWEzdmMifQ.dRVGdAluvTb9EIXVBREbzw';
//var map = new mapboxgl.Map({
    //container: 'map',
    //style: 'mapbox://styles/nieneb/cjg3h8yp80oi82rldxukpu0oi',
//});

var map = new mapboxgl.Map({
        container: 'map',
        style: 'style.json',
        hash: true,
        zoom: 11,
        pitch: 20,
        bearing: 0,
        center: [ 5.24163, 52.36438]
    });
