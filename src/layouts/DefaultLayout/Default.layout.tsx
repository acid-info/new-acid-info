import { PropsWithChildren } from 'react'

export default function DefaultLayout(props: PropsWithChildren) {
  return <main>{props.children}</main>
}
