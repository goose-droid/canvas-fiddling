async function draw() {
  // Wait for all images to be loaded.
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const sheet = document.getElementById("source");

  // Draw slice
  function drawTile (type, canvasx, canavasy) {
   switch (type) {
    case "wall":
      ctx.drawImage(sheet, 0, 0, 30, 30, canvasx, canvasy, 30, 30);
      break;
    case "floor":
      ctx.drawImage(sheet, 30, 0, 30, 30, canvasx, canvasy, 30, 30);
      break;
    case "moss-floor":
      ctx.drawImage(sheet, 60, 0, 30, 30, canvasx, canvasy, 30, 30);
      break;
    case "water":
      ctx.drawImage(sheet, 90, 0, 30, 30, canvasx, canvasy, 30, 30);
      break;
    case "warp":
      ctx.drawImage(sheet, 0, 30, 30, 30, canvasx, canvasy, 30, 30);
      break;
    case "person":
      ctx.drawImage(sheet, 30, 30, 30, 30, canvasx, canvasy, 30, 30);
      break;
    case "key":
      ctx.drawImage(sheet, 60, 30, 30, 30, canvasx, canvasy, 30, 30);
      break;
    case "chest":
      ctx.drawImage(sheet, 90, 30, 30, 30, canvasx, canvasy, 30, 30);
      break;
    default:
      console.log("something goofed");
      break;
   }
  }

  drawTile("wall", 0, 0);
  drawTile("floor", 30, 0);
  drawTile("moss-floor", 60, 0);
  drawTile("water", 90, 0);
  drawTile("warp", 120, 0);
  drawTile("person", 0, 30);
  drawTile("key", 30, 30);
  drawTile("chest", 60, 30);

  function drawBackground () {
    for 
  }

}

draw();