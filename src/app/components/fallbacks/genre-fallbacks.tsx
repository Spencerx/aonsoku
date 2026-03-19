import { AlbumFallback } from '@/app/components/fallbacks/album-fallbacks'
import { SongListFallback } from '@/app/components/fallbacks/song-fallbacks'

export function GenresFallback() {
  return <SongListFallback />
}

export function GenreFallback() {
  return <AlbumFallback />
}
