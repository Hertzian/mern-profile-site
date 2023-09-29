import Timer from './Timer'
import ZenQuote from './ZenQuote'
import GithubUserInfo from './GithubUserInfo'

export default function Note13 () {
  return (
    <div className='App'>
      <Timer />
      <ZenQuote />
      <GithubUserInfo username='Hertzian' />
      <GithubUserInfo username='facebook' />
      <GithubUserInfo username='Colt' />
    </div>
  )
}
