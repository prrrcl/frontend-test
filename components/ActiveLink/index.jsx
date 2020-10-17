import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'

function ActiveLink ({ href, children }) {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return <Link href={href}><a className={className}>{children}</a></Link>
}

export default memo(ActiveLink)