var num=42;
print ("the answer is",num);
var list_of_numbers = [0,1,2,3,4,5];
print(list_of_numbers);
var list_string = ["a","b","c"];
print(list_string);
var set =(1,2,3);
var image =ee.image("CGIAR/SRTM90_V4");

// Zoom to a location
Map.setCenter(36.825321,-1.291209,9);//zoom in to TUK

// Map add layer
Map.addLayer(I);
Map.addLayer(I,{min:0,max:3000,palette:["blue","green","red"]},"elevation");

// calculating slope
var slope =ee.Terrain.slope(I);
Map.addLayer(slope,{min:0,max:60},"slope");
var minelev=I.reduceRegion({
  reducer:ee.Reducer.mean(),
  geometry:shape1,
  scale:90,
});
var mean=minelev.get("elevation");
print("minelev",mean);
var elevTurkana =I.clip(AOI);
Map.addLayer(elevTurkana,{min:0,max:3000,palette:["blue","green","red"]},"elevTurkana");
// Exporting elevimage
Export.image.toDrive({
  image:elevTurkana,//image to export
  description:"Turkana_elevation", //description
  scale:30, //resolution
  maxPixels:1e13 //maximum number
});