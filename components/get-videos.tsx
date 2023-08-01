"use client"

import { useState } from "react"

import { client, cosmic } from "@/lib/data"
import { Bucket, Video, VideoData } from "@/lib/types"
import GetButton from "@/components/get-button"

import EmptyState from "./empty-state"
import Header from "./header"
import Input from "./input"
import NoResultState from "./no-result-state"
import PhotoOutput from "./photo"

export default function GetVideos(bucket: Bucket) {
  const [videos, setVideos] = useState<Video[]>([])
  const [videoData, setVideosData] = useState<VideoData>({
    adding_media: [],
    added_media: [],
  })

  const cosmicBucket = cosmic(
    bucket.bucket_slug,
    bucket.read_key,
    bucket.write_key
  )

  async function searchVideos(q: string) {
    const query = q
    if (query === "") {
      setVideos([])
      return
    }
    try {
      await client.videos.search({ query, per_page: 20 }).then((res: any) => {
        const videos = res.videos
        if (!videos) {
          setVideos([])
        } else {
          setVideos(videos)
        }
      })
    } catch (e: any) {
      console.log(e)
    }
  }

  async function handleAddVideoToMedia(video: Video) {
    const adding_media = [...(videoData.adding_media || []), video.id]
    setVideosData({ ...videoData, adding_media })

    try {
      const response = await fetch(video.video_files[0].link)
      const blob = await response.blob()
      const media: any = new Blob([blob], { type: "video/mp4" })
      media.name = video.id + ".mp4"
      await cosmicBucket.media.insertOne({ media })
      const adding_media = videoData.adding_media?.filter(
        (id: string) => id !== video.id
      )
      const added_media = [...(videoData.added_media || []), video.id]
      setVideosData({ ...videoData, adding_media, added_media })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Header>
        <Input
          placeholder="Search free high-resolution videos"
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) =>
            searchVideos(event.currentTarget.value)
          }
        />
      </Header>
      <div>
        {videos && (
          <div className="mt-4 grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-6">
            {videos.map((video: Video) => {
              return (
                <div key={video.id} className="relative w-full">
                  <PhotoOutput src={video.image!} url={video.url}>
                    <GetButton
                      media={video}
                      handleAddVideoToMedia={() => handleAddVideoToMedia(video)}
                      photoData={videoData}
                    />
                  </PhotoOutput>
                </div>
              )
            })}
          </div>
        )}

        {videos.length === 0 && <EmptyState />}
        {!videos && <NoResultState />}
      </div>
    </div>
  )
}
