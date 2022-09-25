import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to={'/auth/login'}>
        <button>LOGIN</button>
      </Link>
      <Link to={'/auth/register'}>
        <button>REGISTER</button>
      </Link>
    </div>
  )
}
