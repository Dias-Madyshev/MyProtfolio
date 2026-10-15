import portrait from '../../Assets/images/portrait-cutout.png'

interface AvatarProps {
  alt: string
}

/**
 * Круглый портрет: тёмный диск, тонкое кольцо.
 * Голова чуть выходит за верхний край диска, нижняя часть обрезана кругом.
 */
export const Avatar = ({ alt }: AvatarProps) => (
  <div className="relative mx-3 h-44 w-44 shrink-0 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
    <span aria-hidden className="avatar__glow" />
    <span aria-hidden className="avatar__disc" />
    <div className="avatar__clip">
      <img
        src={portrait}
        alt={alt}
        width={768}
        height={1024}
        fetchPriority="high"
        draggable={false}
        className="avatar__img"
      />
    </div>
  </div>
)
