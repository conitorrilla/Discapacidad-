var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Totaldepersonasdiscapacitadasconcertificado_1 = new ol.format.GeoJSON();
var features_Totaldepersonasdiscapacitadasconcertificado_1 = format_Totaldepersonasdiscapacitadasconcertificado_1.readFeatures(json_Totaldepersonasdiscapacitadasconcertificado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totaldepersonasdiscapacitadasconcertificado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Totaldepersonasdiscapacitadasconcertificado_1.addFeatures(features_Totaldepersonasdiscapacitadasconcertificado_1);
var lyr_Totaldepersonasdiscapacitadasconcertificado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Totaldepersonasdiscapacitadasconcertificado_1, 
                style: style_Totaldepersonasdiscapacitadasconcertificado_1,
                interactive: false,
    title: 'Total de personas discapacitadas con certificado.<br />\
    <img src="styles/legend/Totaldepersonasdiscapacitadasconcertificado_1_0.png" /> 582 - 3493<br />\
    <img src="styles/legend/Totaldepersonasdiscapacitadasconcertificado_1_1.png" /> 3494 - 8027<br />\
    <img src="styles/legend/Totaldepersonasdiscapacitadasconcertificado_1_2.png" /> 8028 - 12669<br />\
    <img src="styles/legend/Totaldepersonasdiscapacitadasconcertificado_1_3.png" /> 12670 - 20320<br />\
    <img src="styles/legend/Totaldepersonasdiscapacitadasconcertificado_1_4.png" /> 20321 - 29895<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Totaldepersonasdiscapacitadasconcertificado_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Totaldepersonasdiscapacitadasconcertificado_1];
lyr_Totaldepersonasdiscapacitadasconcertificado_1.set('fieldAliases', {'gid': 'gid', 'fna': 'fna', 'nam': 'nam', 'in1': 'in1', 'De 0 a': 'De 0 a', 'De 15 a': 'De 15 a', '65 año': '65 año', 'Total': 'Total', 'Porcent': 'Porcent', 'totl': 'totl', });
lyr_Totaldepersonasdiscapacitadasconcertificado_1.set('fieldImages', {'gid': 'TextEdit', 'fna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'De 0 a': 'TextEdit', 'De 15 a': 'TextEdit', '65 año': 'TextEdit', 'Total': 'TextEdit', 'Porcent': 'TextEdit', 'totl': 'Range', });
lyr_Totaldepersonasdiscapacitadasconcertificado_1.set('fieldLabels', {'gid': 'no label', 'fna': 'no label', 'nam': 'no label', 'in1': 'no label', 'De 0 a': 'no label', 'De 15 a': 'no label', '65 año': 'no label', 'Total': 'no label', 'Porcent': 'no label', 'totl': 'no label', });
lyr_Totaldepersonasdiscapacitadasconcertificado_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});