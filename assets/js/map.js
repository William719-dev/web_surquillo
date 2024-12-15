var map = L.map('map', {
    center: [-12.112619481960644, -77.01096775500395],
    zoom: 15,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-12.115195197777874, -77.02294875853751], [-12.112619481960644, -77.01096775500395]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);

var Surquillo = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:surquillo", //gisweb: Surquillo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Surquillo.addTo(map);


var Grifo = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:surquillo_grufo", //gisweb: Grifo
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Grifo.addTo(map);


var Colegio = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:surqu_colegio", //gisweb: Colegio
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Colegio.addTo(map);

var Iglesia = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:iglesia", //gisweb: Colegio
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Iglesia.addTo(map);


var Curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:surqui_curva", //gisweb: Curvas_nivel
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Curvas_nivel.addTo(map);



var Clinicas = L.tileLayer.wms("http://localhost:8080/geoserver/web_chorrilos/wms?", {
    layers: "web_chorrilos:clinica_surqu", //gisweb: Clinicas
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Clinicas.addTo(map);














 var baseMaps = {
    "OSM": basemapOSM,
    "Satelite": bgoogleSat
};

var overlayMaps = {
    "Surquillo":Surquillo,
    "Grifo":Grifo,
    "Colegio":Colegio,
    "Iglesia":Iglesia,
    "Curvas_nivel":Curvas_nivel,
    "Clinicas":Clinicas
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);