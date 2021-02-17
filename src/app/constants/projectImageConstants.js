const projectImages = {
};

export const getProjectImages = id => {
  if (!id) return [];

  const images = projectImages[id];
  const extractedImages = [];

  images.keys().forEach((key, index) => {
    const image = images(key);
    // extracts filename with extension for id
    const id = key
      .substring(0, key.lastIndexOf("."))
      .substring(key.lastIndexOf("/") + 1);

    extractedImages.push({ image, id, index });
  });
  return extractedImages;
};

// used to explicitly specify a image ratio to be show in grid
export const imageSpecificRatio = {
  wakency: [{ id: "1", ratioWidth: 3, ratioHeight: 1 }],
  benefactory: [{ id: '1', ratioWidth: 2, ratioHeight: 1 }],
  Tesla1: [
     {id: '1', ratioWidth: 3, ratioHeight: 1},
     {id: '5', ratioWidth: 3, ratioHeight: 1},
  ]
};
