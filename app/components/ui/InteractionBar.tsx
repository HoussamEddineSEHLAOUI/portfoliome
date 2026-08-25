'use client'

import { useState } from 'react'
import { FaRegHeart, FaHeart, FaRegComment, FaRegBookmark, FaBookmark } from 'react-icons/fa6'
import { PiShareFatLight } from 'react-icons/pi'

export default function InteractionBar() {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <div className="mt-4 flex items-center gap-5 border-t border-hairline pt-3">
      <button
        type="button"
        onClick={() => setLiked((v) => !v)}
        aria-pressed={liked}
        aria-label="Like"
        className={`flex items-center gap-1.5 text-sm transition-colors duration-200 ${
          liked ? 'text-primary' : 'text-muted hover:text-white'
        }`}
      >
        {liked ? <FaHeart size={15} /> : <FaRegHeart size={15} />}
      </button>
      <button
        type="button"
        aria-label="Comment"
        className="flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-white"
      >
        <FaRegComment size={15} />
      </button>
      <button
        type="button"
        aria-label="Share"
        className="flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-white"
      >
        <PiShareFatLight size={17} />
      </button>
      <button
        type="button"
        onClick={() => setSaved((v) => !v)}
        aria-pressed={saved}
        aria-label="Bookmark"
        className={`ml-auto flex items-center gap-1.5 text-sm transition-colors duration-200 ${
          saved ? 'text-primary' : 'text-muted hover:text-white'
        }`}
      >
        {saved ? <FaBookmark size={14} /> : <FaRegBookmark size={14} />}
      </button>
    </div>
  )
}
