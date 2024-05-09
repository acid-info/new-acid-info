import { MediaContainer, MediaPhotoProps } from '@/containers/Media'
import photos from '@/data/media.json'

type Props = {
  photos: MediaPhotoProps[]
}

export async function getStaticProps() {
  return {
    props: {
      photos: photos.items as MediaPhotoProps[],
    },
  }
}

export default function MediaPage({ photos }: Props) {
  return (
    <div>
      <MediaContainer photos={photos} />
    </div>
  )
}
