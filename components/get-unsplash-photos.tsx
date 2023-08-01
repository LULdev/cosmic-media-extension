"use client"

import { useState } from "react"

import { UNSPLASH_SEARCH_URL, UNSPLASH_ACCESS_KEY, cosmic } from "@/lib/data"
import { Bucket, UnsplashPhoto, PhotoData } from "@/lib/types"
import GetButton from "@/components/get-button"

import EmptyState from "./empty-state"
import Header from "./header"
import Input from "./input"
import NoResultState from "./no-result-state"
import PhotoOutput from "./photo"

export default function GetUnsplashPhotos(bucket: Bucket) {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [photoData, setPhotosData] = useState<PhotoData>({
    adding_media: [],
    added_media: [],
  })

  const cosmicBucket = cosmic(
    bucket.bucket_slug,
    bucket.read_key,
    bucket.write_key
  )

  async function searchPhotos(q: string) {
    const query = q
    if (query === "") {
      setPhotos([])
      return
    }
    try {
      await fetch(UNSPLASH_SEARCH_URL +
          "?client_id=" +
          UNSPLASH_ACCESS_KEY +
          "&query=" +
          q +
          "&per_page=50").then((res: any) => {
        const photos = res.data.results
        if (!photos) {
          setPhotos([])
        } else {
          setPhotos(photos)
        }
      })
    } catch (e: any) {
      console.log(e)
    }
  }

  async function handleAddPhotoToMedia(photo: UnsplashPhoto) {
    console.log("photoData:", photoData)
    const adding_media = [...(photoData.adding_media || []), photo.id]
    console.log("adding_media:", adding_media)
    setPhotosData({ ...photoData, adding_media })

    try {
      const response = await fetch(photo.urls?.full ?? "")
      const blob = await response.blob()
      const media: any = new Blob([blob], {
        type: "image/jpeg",
      })
      media.name = photo.id + ".jpg"
      await cosmicBucket.media.insertOne({ media })
      const adding_media = photoData.adding_media?.filter(
        (id: string) => id !== photo.id
      )
      const added_media = [...photoData.added_media, photo.id]
      console.log("added_media:", added_media)
      setPhotosData({ ...photoData, adding_media, added_media })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Header>
        <Input
          placeholder="Search free high-resolution photos"
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) =>
            searchPhotos(event.currentTarget.value)
          }
        />
      </Header>
      <div>
        {photos && (
          <div className="mt-4 grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-6">
            {photos.map((photo: UnsplashPhoto) => {
              return (
                <div key={photo.id} className="relative w-full">
                  <PhotoOutput src={photo.urls!.regular} url={photo.url}>
                    <GetButton
                      media={photo}
                      handleAddPhotoToMedia={() => handleAddPhotoToMedia(photo)}
                      photoData={photoData}
                    />
                  </PhotoOutput>
                </div>
              )
            })}
          </div>
        )}
        {photos.length === 0 && <EmptyState />}
        {!photos && <NoResultState />}
      </div>
    </div>
  )
}