var vg_1 = "./Visualisations/choropleth_map.vg.json";

vegaEmbed("#choro_map", vg_1).then(function (result) {
    
    // Access the Vega view instance
    // Documentation: https://vega.github.io/vega/docs/api/view/
    var view = result.view;
}).catch(console.error);
