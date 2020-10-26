const fetch = require("node-fetch")
const path = require("path")
require("dotenv").config()

const API_KEY = process.env.API_KEY
const Channel_Id = process.env.CHANNEL_ID
const fetchdata = async () => {
  const fetchPlaylistId = await (
    await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${Channel_Id}&key=${API_KEY}`
    )
  ).json()

  const playlistId =
    fetchPlaylistId.items[0].contentDetails.relatedPlaylists.uploads

  const fetchUploads = await (
    await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`
    )
  ).json()

  const thumbnails = fetchUploads.items.map(item => {
    return [
      item.snippet.thumbnails.standard.url,
      item.snippet.resourceId.videoId,
    ]
  })
  return thumbnails
}
exports.createPages = async ({ actions: { createPage } }) => {
  const MusicTemplate = path.resolve("./src/templates/musicTemplate.js")

  const results = await fetchdata()
  console.log(results)
  createPage({
    path: `/music`,
    component: MusicTemplate,
    // The context is passed as props to the component as well
    // as into the component's GraphQL query.
    context: {
      data: results,
    },
  })
}
