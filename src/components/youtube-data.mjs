import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser();
export default channelID => {
  return fetch(
    "https://www.youtube.com/feeds/videos.xml?channel_id=" + channelID
  )
    .then(response => response.text())
    .then(XMLdata => parser.parse(XMLdata));
  // .then(data => {
  //   // console.log(data.feed.id);
  //   data?.feed?.entry?.forEach(entry => {
  //     console.log(entry);
  //   });
  // });
};
