import * as React from 'react'
import { Menu } from '@stardust-ui/react'

const items = [
  { key: 'home', icon: 'home' },
  { key: 'users', icon: 'users' },
  { key: 'search', icon: 'search' },
]

const MenuExampleIconOnly = () => <Menu iconOnly defaultActiveIndex={0} items={items} />

export default MenuExampleIconOnly
