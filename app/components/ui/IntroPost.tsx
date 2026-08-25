import { profile } from '@/app/data/profile'
import FeedPost from './FeedPost'
import Reveal from './Reveal'

export default function IntroPost() {
  const { introPost } = profile
  return (
    <Reveal className="mt-8 md:mt-10">
      <FeedPost badge="Pinned" tags={introPost.tags}>
        <p>{introPost.greeting}</p>
        {introPost.paragraphs.map((p) => (
          <p key={p} className="mt-3">
            {p}
          </p>
        ))}
      </FeedPost>
    </Reveal>
  )
}
